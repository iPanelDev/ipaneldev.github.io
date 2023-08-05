# 验证回复

## 权限

- 控制台->Host
- 实例->Host

## 示例

```json
{
  "type": "action",
  "sub_type": "verify",
  "data": {
    "token": "...",
    "custom_name": "...",
    "client_type": "instance"
  }
}
```

## type

`action`

## sub_type

`verify`

## data

| 名称        | 描述                       | 值类型               |
| ----------- | -------------------------- | -------------------- |
| token       |                            | string               |
| custom_name | 自定义名称                 | string/null          |
| client_type | [客户端类型](../../client) | `instance`/`console` |

### token

[random_key](verifyRequest#random_key)字符串拼接上iPanel Host的密码后取32位的16进制字符串

:::note
iPanel Host的密码就是iPanel Host目录下setting.json里面[`password`](../../../guide/host/setting#password)项
:::
