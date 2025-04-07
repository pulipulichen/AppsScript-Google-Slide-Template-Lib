/**
 * 
 * @param line 例如 ```smartart {color: "red"}
 * @returns {color: "red"}
 */
function parseCodeConfig(line) {
  
  let startPos = line.indexOf('{')
  let endPos = line.lastIndexOf('}')
  // Logger.log({startPos, endPos})
  if (startPos > 4 && endPos > (startPos + 2)) {
    try {
      let config = line.slice(startPos, endPos + 1)
      // Logger.log(config)
      config = JSON.parse(config)

      return {
        type: line.slice(line.lastIndexOf('```') + 3, line.indexOf('{')).trim(),
        config
      }
    } catch (e) {
      // 如果 JSON 解析失敗，則返回 null 或拋出錯誤，具體取決於需求
      Logger.log('JSON 解析錯誤: ' + e);
      return {
        type: line.slice(line.lastIndexOf('```') + 3).trim(),
      };
    }
  }

  return {
    type: line.slice(line.lastIndexOf('```') + 3).trim(),
  };
}
