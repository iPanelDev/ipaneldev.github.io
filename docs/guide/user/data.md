# 用户数据

保存在`./data/users.json`

```json title="./data/users.json"
{
  "admin": {
    "password": "114514",
    "lastLoginTime": "2023-11-25T14:01:39.2693685+08:00",
    "level": 3,
    "instances": [],
    "description": "",
    "ipAddresses": [
      "127.0.0.1"
    ]
  },
  "example": {
    "password": "114514",
    "lastLoginTime": null,
    "level": 2,
    "instances": [],
    "description": null,
    "ipAddresses": []
  }
}
```

- 类型：`Record<string, User>`
