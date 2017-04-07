
# select
请求参数
```
{
	table: 'name',
	data: {
		id: 1,
		..
	}
}
```
请求响应
```
[{..}, ..]
```

# inset
请求参数
```
{
	table: 'name',
	data: {
		name: 'name',
		..
	}
}
```
请求响应
```
{id:1, ..}
```

# update
请求参数
```
{
	table: 'name',
	data: {
		id: 1,
		name: 'name',
		..
	}
}
```
请求响应
```
{error:0, msg: '..成功'}
```

# delete
请求参数
```
{
	table: 'name',
	data: {
		id: 1,
		..
	}
}
```
请求响应
```
{error:0, msg: '..成功'}
```
