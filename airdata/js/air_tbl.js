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
		
		str +="</tr></thead><tbody></tbody>";
	}else{}
	
	document.getElementById("airpolution_tbl").innerHTML = str;
}
