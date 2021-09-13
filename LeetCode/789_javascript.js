// 你在进行一个简化版的吃豆人游戏。你从 [0, 0] 点开始出发，你的目的地是 target = [xtarget, ytarget] 。地图上有一些阻碍者，以数组 ghosts 给出，第 i 个阻碍者从 ghosts[i] = [xi, yi] 出发。所有输入均为 整数坐标 。

// 每一回合，你和阻碍者们可以同时向东，西，南，北四个方向移动，每次可以移动到距离原位置 1 个单位 的新位置。当然，也可以选择 不动 。所有动作 同时 发生。

// 如果你可以在任何阻碍者抓住你 之前 到达目的地（阻碍者可以采取任意行动方式），则被视为逃脱成功。如果你和阻碍者同时到达了一个位置（包括目的地）都不算是逃脱成功。

// 只有在你有可能成功逃脱时，输出 true ；否则，输出 false 。

//
// 示例 1：

// 输入：ghosts = [[1,0],[0,3]], target = [0,1]
// 输出：true
// 解释：你可以直接一步到达目的地 (0,1) ，在 (1, 0) 或者 (0, 3) 位置的阻碍者都不可能抓住你。
// 示例 2：

// 输入：ghosts = [[1,0]], target = [2,0]
// 输出：false
// 解释：你需要走到位于 (2, 0) 的目的地，但是在 (1, 0) 的阻碍者位于你和目的地之间。
// 示例 3：

// 输入：ghosts = [[2,0]], target = [1,0]
// 输出：false
// 解释：阻碍者可以和你同时达到目的地。
// 示例 4：

// 输入：ghosts = [[5,0],[-10,-2],[0,-5],[-2,-2],[-7,1]], target = [7,7]
// 输出：false
// 示例 5：

// 输入：ghosts = [[-1,0],[0,1],[-1,0],[0,1],[-1,0]], target = [0,0]
// 输出：true
//

// 提示：

// 1 <= ghosts.length <= 100
// ghosts[i].length == 2
// -104 <= xi, yi <= 104
// 同一位置可能有 多个阻碍者 。
// target.length == 2
// -104 <= xtarget, ytarget <= 104
// 通过次数15,147提交次数22,318

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */

var escapeGhosts = function (ghosts, target) {
  let length = getDistance(0, 0, target[0], target[1]);
  for (let [x, y] of ghosts) {
    let path = getDistance(x, y, target[0], target[1]);
    if (path <= length) {
      return false;
    }
  }
  return true;

  function getDistance(x1, y1, x2, y2) {
    let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return distance;
  }
};

// 设C为 target  A为起点  B为ghost的点
// 要想 ghost拦截 在 A到C中拦截到 因为 人和鬼走的距离一样 即至少 需要有D 使得 AD = DB
// 那么 AD + DC = AC = DB + DC >= BC
// 所以 BC路线最短
// 贪心可得 鬼直接在终点等就是最优解

/**
 *
 *          C
 *         /  \
 *        /    \
 *       /      \
 *      /        \
 *     /   \D     \
 *    /      \     \
 *   /         \    \
 *  /            \   \
 * A               \
 *                     B
 *
 * */