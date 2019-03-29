# Excel 和 Zip

## Excel
[js-xlsx](https://github.com/SheetJS/js-xlsx) 需要 [file-saver](https://github.com/eligrey/FileSaver.js) 、[script-loader](https://github.com/webpack-contrib/script-loader)

### 安装
```bash
npm install js-xlsx file-saver
npm install script-loader -D
```

### 使用
为了方便调用已做封装。`@/utils/Export2Excel.js`

#### 导出Excel文件
```js
// 懒加载方式
import('@/utils/Export2Excel').then(excel => {
    const header = ['order', 'id', 'time', 'title', 'channel', 'hot', 'author']
    excel.export_json_to_excel({
        'header': header,
        'data': data,
        'filename': 'example',
        'autoWidth': true,
        'bookType': 'xlsx'
    })
})
```

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填|
| :-: | :- | :-: | :-: | :-: | :-: |
| header | 导出的表头 | Array |  | [] | 是 |
| data | 导出的数据 | Array |  | [] | 是 |
| filename | 导出的文件名 | String |  | excel-list |  |
| autoWidth | 是否自适应宽度 | Boolean | true / false | true |  |
| bookType | 导出的文件类型 | String | xlsx、csv、text、[more](https://github.com/SheetJS/js-xlsx#supported-output-formats) | xlsx |  |

#### 获取Excel文件数据
```js
// 直接方式
import { get_excel_data } from '@/utils/Export2Excel'
// 获取Excel文件file
get_excel_data(file, (data) => {
    const { header, body } = data
})
```
::: tip
具体示例请查看 `@/pages/index/children/excel`
:::

## Zip
[jszip](https://github.com/Stuk/jszip) 依赖 [file-saver](https://github.com/eligrey/FileSaver.js) 、[script-loader](https://github.com/webpack-contrib/script-loader)

### 安装
```bash
npm install jszip file-saver
npm install script-loader -D
```

### 使用
为了方便调用已做封装。`@/utils/Export2Zip.js`

#### 导出Zip
```js
import('@/utils/Export2Zip').then(zip => {
    const header = ['order', 'id', 'time', 'title', 'channel', 'hot', 'author']
    zip.export_txt_to_zip({
        'header': header,
        'data': data,
        'txtName': this.filename || 'example',
        'zipName': this.filename || 'example'
    })
})
```
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填|
| :-: | :- | :-: | :-: | :-: | :-: |
| header | 导出的表头 | Array |  | [] | 是 |
| data | 导出的数据 | Array |  | [] | 是 |
| txtName | 导出的txt文件名 | String |  | file |  |
| zipName | 导出的zip文件名 | String |  | true |  |

::: tip
具体示例请查看 @/pages/index/children/zip

本项目只默认导出包含 `.txt` 的 zip 文件。需要自定义可查看 [jszip](https://github.com/Stuk/jszip)。
:::

