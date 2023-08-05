# 订阅目标的信息回复

回复[获取订阅目标的信息](../action/getInfo)

## 权限

- Host->控制台

## type

`event`

## sub_type

- `targets_info` 当订阅目标为`*`时
- `target_info` 当订阅目标为一个GUID时

## data

### 当订阅目标为`*`时

Dictionary<key: guid, value: [FullInfo](../struct/fullInfo)>

### 当订阅目标为一个GUID时

[FullInfo](../struct/fullInfo)
