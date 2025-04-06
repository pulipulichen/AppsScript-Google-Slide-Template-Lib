/**
 * 
 * @param line 例如 ```smartart {color: "red"}
 * @returns {color: "red"}
 */
function parseCodeConfig(line) {
  const regex = /({[\s\S]*?})/;
  const match = line.match(regex);

  if (match && match[1]) {
    try {
      return {
        type: line.slice(line.indexOf('`') + 1, line.indexOf('{')).trim(),
        config: JSON.parse(match[1])
      }
    } catch (e) {
      // 如果 JSON 解析失敗，則返回 null 或拋出錯誤，具體取決於需求
      Logger.log('JSON 解析錯誤: ' + e);
      return {
        type: line.slice(line.indexOf('`') + 1).trim(),
      };
    }
  }

  return {
    type: line.slice(line.indexOf('`') + 1).trim(),
  };
}
