/**
 * 專案 1H_8_TSHzwo8Wu0ByYBqBzc5S12iuYdkagtFu5Z9IHADQTtLUYF6hNyY5
 * 
 * 修改 https://script.google.com/u/0/home/projects/1H_8_TSHzwo8Wu0ByYBqBzc5S12iuYdkagtFu5Z9IHADQTtLUYF6hNyY5/edit
 * 
 * 寫法 https://script.google.com/u/0/home/projects/1ggwO5A9iFwWA-1I-kjT1o8exUNcmF0DUkpGUbX0BiFA7ENyvsCfY3Ms4/edit
 */

let LAYOUT_DICT = {
  '結束 空白': ['simple-light-2_TITLE_2_1_1',],
  '章節h2': ['simple-light-2_TITLE_2_1_1_1', 'p9_CUSTOM_3_1_1_1'],
  '封面': ['simple-light-2_TITLE_1', 'p9_CUSTOM_5'],
  '章節h1': ['simple-light-2_CUSTOM_10_1', 'p9_CUSTOM_3_1_1'],
  '子目錄': ['simple-light-2_CUSTOM_10_1_1',],
  '目錄': ['simple-light-2_TITLE_AND_BODY_1_5', 'p9_CUSTOM_3_1_2_1'],
  '單欄': ['simple-light-2_TITLE_AND_BODY_1', 'p9_CUSTOM_3_1_1_1_1'],
  '雙欄標題vt': ['simple-light-2_TITLE_AND_BODY_1_6_1', 'p9_CUSTOM_3_1_1_1_1_1_1', ],
  '雙欄h': ['simple-light-2_TITLE_AND_BODY_1_3', 'p9_CUSTOM_3_1_1_1_1_1'],
  '雙欄h73': ['simple-light-2_TITLE_AND_BODY_1_3_2',],
  '雙欄h37': ['simple-light-2_TITLE_AND_BODY_1_3_2_1',],
  '文圖': ['p9_CUSTOM_3_1_2_1_1', ],
  '雙欄標題ht': ['simple-light-2_TITLE_AND_BODY_1_3_1',],
  '三欄標題ht': ['simple-light-2_TITLE_AND_BODY_1_3_1_1',],
  '三欄v': ['simple-light-2_TITLE_AND_BODY_1_3_1_1_1',],
  '補充': ['simple-light-2_TITLE_AND_BODY_1_4', 'p9_CUSTOM_3_1_1_1_1_2'],
  '結尾': ['simple-light-2_TITLE_AND_BODY_1_4_3', 'p9_CUSTOM_5_1'],
  '強調': ['simple-light-2_TITLE_AND_BODY_1_4_2', 'p9_CUSTOM_3_1_1_1_1_2_1_1'],
  '強調 白底大字': ['simple-light-2_TITLE_AND_BODY_1_4_1',],
  '強調 大字': ['simple-light-2_BIG_NUMBER_1_1',],
  '強調 空白': ['simple-light-2_BLANK', 'p9_CUSTOM_3_1_1_1_1_2_1'],
  '參考資料': ['simple-light-2_TITLE_AND_BODY_1_5_1', 'p9_CUSTOM_3_1_1_1_1_1_2'],
  '下一步驟': ['simple-light-2_TITLE_AND_BODY_1_5_1_1',],
}

let LAYOUT_NAME_MAP = {
  '6 結束 空白': '結束 空白',
  '3-2 章節h2': '章節h2',
  'h2': "章節h2",
  '1 封面': '封面',
  'h1': '章節h1',
  '章節': '章節h1',
  '2-2 子目錄': '子目錄',
  '2 目錄': '目錄',
  '內文 單欄': '單欄',
  'default': '單欄',
  '4-1-1 內文 單欄': '單欄',
  '4-1-2 雙欄標題vt': '雙欄標題vt',
  '雙欄': '雙欄h',
  '4-1-2 雙欄h': '雙欄h',
  '4-1-2 雙欄h-73': '雙欄h73',
  '4-1-2 雙欄h-37': '雙欄h37',
  '4-1-2 雙欄標題ht': '雙欄標題ht',
  '雙欄標題': '雙欄標題ht',
  '4-1-3 三欄標題ht': '三欄標題ht',
  '三欄標題': '三欄標題ht',
  '4-1-3 三欄v': '三欄v',
  '三欄': '三欄v',
  '4-2 補充': '補充',
  '4-2 結尾': '結尾',
  '4-3 內文強調 文字為主': '強調',
  '內文強調 文字為主': '強調',
  '4-3 內文強調 白底大字': '強調 白底大字',
  '4-3 內文強調 大字': '強調 大字',
  '4-3 內文強調 空白': '強調 空白',
  '5 參考資料': '參考資料',
  '5-2 下一步驟': '下一步驟'
}

let LAYOUT_DETECT_EXCLUDE_LIST = [
  'TITLE_1',
  'CUSTOM_10_1_1',
  'TITLE_AND_BODY_1_5',
  'TITLE_AND_BODY_1_5_1'
]