function gen_air_tbl(data){
	var jsonDoc = JSON.parse(data);
	console.log(jsonDoc);
	str="<thead><tr>";
	if(jsonDoc.success==true){
		console.log(jsonDoc.success);
		
		var title_length = jsonDoc.result.fields.length;
		console.log(title_length);
		for(var i=0;i<title_length;i++){
			var title = jsonDoc.result.fields[i].id;
			str += "<th>"+title+"</th>"
		}
		str += "</tr></thead><tbody>";
		var location_count = jsonDoc.result.records.length;
		console.log(location_count);
		for(var j=0;j<location_count;j++){
			str += "<tr><td>"+jsonDoc.result.records[j].County;
			str += "</td><td>"+jsonDoc.result.records[j].SiteName;
			str += "</td><td>"+jsonDoc.result.records[j].AQI;
			str += "</td><td>"+jsonDoc.result.records[j].Pollutant;
			str += "</td><td>"+jsonDoc.result.records[j].Status;
			str += "</td><td>"+jsonDoc.result.records[j].SO2;
			str += "</td><td>"+jsonDoc.result.records[j].CO;
			str += "</td><td>"+jsonDoc.result.records[j].CO_8hr;
			str += "</td><td>"+jsonDoc.result.records[j].O3;
			str += "</td><td>"+jsonDoc.result.records[j].O3_8hr;
			str += "</td><td>"+jsonDoc.result.records[j].PM10;
			str += "</td><td>"+jsonDoc.result.records[j]["PM2.5"];
			str += "</td><td>"+jsonDoc.result.records[j].NO2;
			str += "</td><td>"+jsonDoc.result.records[j].NOx;
			str += "</td><td>"+jsonDoc.result.records[j].NO;
			str += "</td><td>"+jsonDoc.result.records[j].WindSpeed;
			str += "</td><td>"+jsonDoc.result.records[j].WindDirec;
			str += "</td><td>"+jsonDoc.result.records[j].PublishTime;
			str += "</td><td>"+jsonDoc.result.records[j]["PM2.5_AVG"];
			str += "</td><td>"+jsonDoc.result.records[j].PM10_AVG;
		}
		/*for(i=0;i<jsonDoc.PermissionManagement.length;i++){
			str +="<tr><td id=autho_UserID_"+i+" data-th=使用者ID>"+jsonDoc.PermissionManagement[i].UserID;
			str +="</td><td id=autho_Name_"+i+" data-th=姓名>"+jsonDoc.PermissionManagement[i].Name;
			str +="</td><td id=autho_PhoneNo_"+i+" data-th=電話>"+jsonDoc.PermissionManagement[i].PhoneNo;
			str +="</td><td id=autho_Priority_"+i+" data-th=權限>"+jsonDoc.PermissionManagement[i].Priority;
			str +="</td><td data-th=管理>"+"<button type=button data-toggle=modal data-target=#edit_user_autho_popout onclick=authority_edit("+i+")>編輯</button>"+" ";
			str +="<button type=button data-toggle=modal data-target=#delete_user_autho_popout onclick=delete_authority("+i+")>刪除</button>";
			str +="</td></tr>";
		}*/
		str +="</tr></thead><tbody></tbody>";
	}else{}
	
	document.getElementById("airpolution_tbl").innerHTML = str;
}
