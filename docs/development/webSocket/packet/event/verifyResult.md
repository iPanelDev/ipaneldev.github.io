# 验证结果

当Host接收到[验证回复](../action/verify)时发送

- 网页控制台
  - [ ] 收
- 实例
  - [x] 收
  - [ ] 发

## type

`event`

## subType

`verify_result`

## data

| 名称    | 描述     | 值类型      |
| ------- | -------- | ----------- |
| success | 是否成功 | boolean     |
| reason  | 原因     | string/null |

当`success`为true时，`reason`为null

### reason

- `数据异常` 验证时data为null
- `MD5校验失败` 返回的token不正确
