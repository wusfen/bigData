# PV
protal: http://10.200.69.3:8042/monitor/qryVisitPvInfo 
bsbl: http://10.200.69.3:8042/monitor/qryGslbPvInfo 

POST请求，请求参数：{"productId":"0", "startDate":"20170216090500", "endDate":"20170216230500", "statType":"1"}

productId:
"0" - 视频 
"1" - 影院 
"2" - 直播 
"3" - 所有 

statType:
1: 5分钟显示
2：小时显示

返回参数格式：
{"result":0,"datas":[{"time":"09:20","pv":24000},{"time":"10:25","pv":26500},{"time":"09:25","pv":25500}],"resultDesc":"success"}


# UV
http://10.200.69.3:8042/monitor/qryVisitUvInfo




# auth
http://10.200.69.3:8042/monitor/qryWdRequireData

{"productId":"1", "startDate":"20170222090500", "endDate":"20170222230000", "statType":"1"}

productId 
detailData.jsp     0
livelistData.jsp    1
detail或者Detail.jsp 2
不包含的就是其他  3





# 页面数据
http://10.200.69.3:8042/monitor/qryVisitBrief
http://10.200.69.3:8042/monitor/qryGslbBrief
请求参数

{"productId":"3","startDate":"20170222000000","endDate":"20170223000000"}

0。视频，1，影院，2.直播，3 all





# 部署
10.200.65.16
10.200.65.24
hadoop/hadoop123!@#

C:\Program Files (x86)\WinSCP

/usr/local/tomcat_monitor/webapps/monitor