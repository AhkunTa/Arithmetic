# SKU算法

### 电商项目中的sku算法js实现

> 最小库存管理单元（Stock Keeping Unit, SKU）是一个会计学名词，定义为库存管理中的最小可用单元，例如纺织品中一个SKU通常表示规格、颜色、款式，而在连锁零售门店中有时称单品为一个SKU。最小库存管理单元可以区分不同商品销售的最小单元，是科学管理商品的采购、销售、物流和财务管理以及POS和MIS系统的数据统计的需求，通常对应一个管理信息系统的编码。 —— form wikipedia 最小存货单位

// 1. 属性列表

		"attrList": [
	        {
	            "attrName": "颜色",
	            "attrValue": [
	                {
	                    "attrValueId": 111,
	                    "attrValue": "黄色",
	                },
	                {
	                    "attrValueId": 222,
	                    "attrValue": "绿色",
	                }
	            ]
	        },
	        {
	            "attrName": "尺寸",
	            "attrValue": [
	                {
	                    "attrValueId": 333,
	                    "attrValue": "大",
	                },
	                {
	                    "attrValueId": 444,
	                    "attrValue": "小",
	                }
	            ]
	        }
	    ]

// 2. sku商品列表

			"skuProdList": [
		        {
		            "skuId": 1,
		            "stock": 0,  //库存为0 不能选中
		            "saleAttrList": [
		                {
		                    "attrValueId": 111
		                },
		                {
		                    "attrValueId": 333
		                }
		            ]
		        },
		        {
		            "skuId": 2，
		           	"stock": 10,
		            "saleAttrList": [
		                {
		                    "attrValueId": 222
		                },
		                {
		                    "attrValueId": 333
		                }
		            ]
		        },
		        {
		            "skuId": 3,
		            "stock": 33,
		            "saleAttrList": [
		                {
		                    "attrValueId": 111
		                },
		                {
		                    "attrValueId": 444
		                }
		            ]
		        },
		        {
		            "skuId": 4,
		            "stock": 0, //库存为0 不能选中
		            "saleAttrList": [
		                {
		                    "attrValueId": 222
		                },
		                {
		                    "attrValueId": 444
		                }
		            ]
		        }
		    ]


	
	/** 
		 @params idArray  选中的id列表 如 [111,333]
	 */

	// 点击完后 判断总库存
	function filterStock(idArray) {
	    let stock = 0;
	    skuProdList.map(function (item, index, arr) {
	        // saleAttrList 单一sku属性列表
			let saleAttrList = []
	        item.saleAttrList.map(function (it, ind, ar) {
	            saleAttrList.push(it.attrValueId);
	        })
	        let flag = true;
			// 判断 选中的id列表 包含在单一属性列表内
	        for (let i = 0; i < idArray.length; i++) {
	            if (!saleAttrList.includes(idArray[i])) {
	                flag = false;
	            }
	        }
			// 若包含 则当前点击的商品总库存加上单一sku的库存
	        if (flag) {
	            stock += item.stock;
	        }
	    })
	    return stock;
	}
	/** 
		 @params array  当前选中的id列表 如 [111,333]
	 */
	function filter(array) {
		let newAttrList = attrList;
		// map 存储 点击id在属性列表的第一层索引 及品类的索引   颜色大小
		// 点击 [111,333]  { 1: 111, 2: 333 }
		// 点击 [444]    { 2: 444 } 
		let map = new Map();
		for(let i=0; i<newAttrList.length; i++){
			newAttrList[i].attrValue.map((item,index) =>{
				for(let j=0; j<array.length;j++){
					if(item.attrValueId == array[i]){
						map.set(i,item.attrValueId)
					}
				}
			})
		}

	    for (let i = 0; i < newAttrList.length; i++) {
	        // 便利其中属性（如颜色、大小）
	        newAttrList[i].attrValue.map((item, index)=> {
	            let valueId = map.get(i);
	            // 取消所有属性高亮
	            item['active'] = false;
	            // 当前属性行 有选中项
	            if(valueId){
	            	if(item.attrValueId == valueId){
	            		// 选中项的 必为高亮 并且 不置灰 如选中 111 黄色
	            		item['active'] = true;
	            		item['disable'] = false;
	            	}else {
	            		// 同一行的其他项 如 111 之外的 222 绿色
	            		// 浅拷贝 选中的id array
	            		let temp = array.concat();
	            		// 移除选中项 加入同一行的未选中项 
	            		temp.splice(temp.indexOf(valueId),1);
	            		temp.push(item.attrValueId);
	            		// 这里 判断其他项的状态  
	            		// 如 选中 [111]   则计算 [222] 的总库存 如 sku 中 含有222 属性的sku库存总和为0 则222即绿色属性按钮置灰
	            		// 如 选中 [111,333] 则计算 [222,333] 的总库存 sku中含有 222,333 两个属性的库存总和为 0 则 222 按钮置灰
	            		// 注 因为属性列表长度为任意长度 所以需要计算 单sku中包含 当前的属性值 如[222,333]的sku总库存
	            		if(filterStock(temp)){
	            			item['disable'] = false;
	            		}else {
	            			item['disable'] = true;	            			
	            		}
	            	}
	            }else {
	            	// 其他没有选中项的行的属性
	            	let temp = array.concat();
	            	temp.push(item.attrValueId);
	            	if(filterStock(temp)){
	            		item['disable'] = false;
            		}else {
            			item['disable'] = true;	            			
            		}
	            }
	        })
	    }
	    return newAttrList
	}


属性列表

颜色		1    2

大小		3    4

形状		5    6
 
sku列表 有8个单sku 每个sku都有单个库存  

[1,3,5] 
[1,3,6]
[2,3,5]
[2,4,6]
[1,4,5]
[1,4,6]
[2,4,6]
[2,4,6]

所以 属性1 是否置灰取决于 包含属性1 的总库存 
需计算 所有包含1的总库存 [1,4,5] [1,4,6] [1,3,5] [1,3,6]
若以上四个sku库存都为0 则1 置灰

所以总体计算分为二部分
1 和选中属性同行的未选中属性
2 未选中的属性行中的属性


1 选中的属性值的同行属性是否置灰  如 选中 属性1 即 属性2 是否置灰
  **除去当前行的其他选中属性 加上 当前行未选中的属性 的总库存 

2 选中的属性行中的属性 加上 未选中的属性行中的属性

// 同理 若选中 属性1 则属性3置灰与否取决于 [1,3,5] [1,3,6]的总库存  注: 同行属性不能同时选中



// 期望返回数据格式
	
   // 点击 [111] 即 选中黄色 期望返回
		"attrList": [
	        {
	            "attrName": "颜色",
	            "attrValue": [
	                {
	                    "attrValueId": 111,
	                    "attrValue": "黄色",
	                    "active": true,
	                    "disable": false,

	                },
	                {
	                    "attrValueId": 222,
	                    "attrValue": "绿色",
	                    "active": false,
	                    "disable": false,
	                }
	            ]
	        },
	        {
	            "attrName": "尺寸",
	            "attrValue": [
	                {
	                    "attrValueId": 333,
	                    "attrValue": "大",
	                    "active": false,
	                    "disable": true, // 111 333 库存为0 disable true
	                },
	                {
	                    "attrValueId": 444,
	                    "attrValue": "小",
	                    "active": false,
	                    "disable": false,
	                }
	            ]
	        }
	    ]

	// 点击 [222] 即 选中绿色 期望返回
		"attrList": [
	        {
	            "attrName": "颜色",
	            "attrValue": [
	                {
	                    "attrValueId": 111,
	                    "attrValue": "黄色",
	                    "active": false,
	                    "disable": false,

	                },
	                {
	                    "attrValueId": 222,
	                    "attrValue": "绿色",
	                    "active": true,
	                    "disable": false,
	                }
	            ]
	        },
	        {
	            "attrName": "尺寸",
	            "attrValue": [
	                {
	                    "attrValueId": 333,
	                    "attrValue": "大",
	                    "active": false,
	                    "disable": false,
	                },
	                {
	                    "attrValueId": 444,
	                    "attrValue": "小",
	                    "active": false,
	                    "disable": true, // 222,444 sku库存为0 disable true
	                }
	            ]
	        }
	    ]