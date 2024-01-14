# 验证

- 网页控制台
  - [ ] 收
- 实例
  - [ ] 收
  - [x] 发

## 示例

```json
{
    "type": "request",
    "subType": "verify",
    "data": {
        "md5": "...",
        "time": "...",
        "instanceId": "...",
        "customName": "...",
        "metadata": { ... }
    }
}
```

## type

`request`

## subType

`verify`

## data

| 名称       | 描述             | 值类型                         |
| ---------- | ---------------- | ------------------------------ |
| md5        | 见下             | string                         |
| time       | 见下             | string                         |
| instanceId | 实例Id           | string (`^[a-zA-Z0-9]{32}$`)   |
| customName | 实例的自定义名称  | string?                        |
| metadata   | 实例的元数据     | [Metadata](../../struct/metadata) |

### md5计算方法

```js
const time = new Date().toISOString();
// 获取ISO格式时间字符串 eg: `2023-11-25T10:50:17.933Z`

const instancePassword = '...';

const md5 = getMD5(`${time}.${instancePassword}`);
```

在构造数据包时，将`md5`和`time`作为data的属性发送

:::note
密码为[`instancePassword`](../../../guide/composition/backend/setting#instancepassword)项的值
:::
