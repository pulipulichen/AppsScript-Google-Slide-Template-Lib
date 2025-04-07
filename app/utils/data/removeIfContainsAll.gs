function removeIfContainsAll(array, removeItems) {
  // 先檢查是否包含所有 removeItems 的元素
  const hasAll = removeItems.every(item => array.includes(item));
  if (!hasAll) return array.slice(); // 不包含就直接回傳副本

  // 建立一個 shallow copy
  const result = array.slice();

  // 對每個要移除的元素，只移除第一次出現
  // for (const item of removeItems) {
  for (let i = removeItems.length - 1; i >= 0; i--) {
    let item = removeItems[i]
    const index = result.lastIndexOf(item);
    if (index !== -1) {
      result.splice(index, 1); // 只移除第一個出現的
    }
  }

  return result;
}
