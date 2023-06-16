
export const Caution = () => {

	return (
		<div className='caution' style={{marginTop: '50px'}}>
			<div style={{textAlign: 'center', marginBottom: '50px'}}>
				<h1 style={{paddingTop: '10px'}}>※ 참 고 사 항 ※</h1>
			</div>
			<h3 className="page-header"> 도시가스 요금 = (사용량 X 온압 보정 계수 X 평균 열량 X 단가) + 기본 요금 + 부가세(10%) </h3>
			<p style={{marginTop: '30px'}}>사용량 : 계량기의 지침으로, 당월분에서 전월 지침량을 빼면 나오는 당월 사용량</p>
			<p> 온압 보정 계수 : 공급되는 가스 온도와 압력에 따른 부피 환산 계수, 평균 온도와 압력에 따라 산업통상자원부에서 매년 고시 </p>
			<p> 평균 열량 : 청구 기간 동안의 월간 가중 평균 열량으로, 한국 가스 공사에서 예상 열량 및 열량 실적을 매월 공개 </p>
			<p> 단가 : 사용처별(주택난방, 냉난방공조, 산업), 계절별(동절기, 하절기), 용도별(취사, 개별난방, 중앙난방, 업무) 마다 조금씩 바뀌는 가격 </p>
			<p> 기본 요금 : 계량기 교체비용 처럼 도시가스를 사용하지 않아도 도시가스 공급을 위해 매월 사용되는 고정 비용 </p>
			<p style={{marginTop: '30px', marginBottom: '30px', color: '#ff0000', fontSize: '20px'}}> ※ 도시가스 회사별로 소매요금 조정시기가 달라 기준시점이 차이가 날 수 있으며 다양한 세부구분이 있을 수 있으니, 자세한 계산식은 각 도시가스 회사에서 제공한 요금표를 참고</p>
			<div style={{textAlign: 'center', marginBottom: '50px'}}>
				<h1 style={{paddingTop: '10px'}}>지역별 도시가스 회사 정보</h1>
			</div>
			<table width="100%" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="gas-table" style={{verticalAlign: "middle"}}>지역</th>
                                <th className="gas-table" style={{verticalAlign: "middle"}}>도시가스 회사명</th>
                                <th className="gas-table" style={{verticalAlign: "middle"}}>대표 전화</th>
                                <th className="gas-table" style={{verticalAlign: "middle"}}>공급 지역</th>
                            </tr>
                        </thead>
                        <tbody>
							<tr>
								<td rowspan="6" className="gas-table" style={{verticalAlign: "middle"}}>수도권</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>코원에너지서비스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1599-3366</td>
								<td style={{verticalAlign: "middle"}}>
									[서울] 강남· 강동· 송파구, 서초구 일부 <br/>
									[경기] 과천· 성남· 하남· 광주· 이천시, 여주군 (양평군 일부)
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)예스코</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1544-3131</td>
								<td style={{verticalAlign: "middle"}}>
									[서울] 중· 광진· 성동· 동대문· 중랑구, 종로· 용산· 성북· 서대문구 일부 <br/>
									[경기] 구리· 남양주시, 가평군, 포천시· 양평군 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>서울도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1588-5788</td>
								<td style={{verticalAlign: "middle"}}>
									[서울] 은평· 마포· 강서· 영등포· 관악· 동작구, 종로· 용산· 서대문· 양천· 서초구 일부 <br/>
									[경기] 고양· 파주시, 김포시 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)귀뚜라미에너지</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1670-4700</td>
								<td style={{verticalAlign: "middle"}}>
									[서울] 구로· 금천구, 양천구 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)삼천리</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1544-3002</td>
								<td style={{verticalAlign: "middle"}}>
									[인천] 남· 연수구, 중· 동· 남동구 일부 <br/>
									[경기] 부천· 시흥· 안산· 안양· 광명· 의왕· 군포· 수원· 화성· 용인· 안성· 평택· 오산시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대륜E&S</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1566-6116</td>
								<td style={{verticalAlign: "middle"}}>
									[서울] 노원· 도봉· 강북구, 성북구 일부 <br/>
									[경기] 의정부· 양주· 동두천시, 연천군, 포천시 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>인천광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>인천도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1600-0002</td>
								<td style={{verticalAlign: "middle"}}>
									[인천] 부평· 계양· 서구, 강화군, 중· 동· 남동구 일부 <br/>
									[경기] 김포시 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대전광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>CNCITY에너지</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1666-0009</td>
								<td style={{verticalAlign: "middle"}}>
									[대전] 대전시 <br/>
									[충남] 계롱시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>광주광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)해양에너지</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1544-1115</td>
								<td style={{verticalAlign: "middle"}}>
									[광주] 광주시 <br/>
									[전남] 나주시, 화순· 장성· 담양· 영광· 해남· 함평· 장흥군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대구광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대성에너지(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1577-1190</td>
								<td style={{verticalAlign: "middle"}}>
									[대구] 대구시 <br/>
									[경북] 경산시, 칠곡· 고령군 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>울산광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)경동도시가스</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1577-8181</td>
								<td style={{verticalAlign: "middle"}}>
									[울산] 울산시 <br/>
									[경남] 양산시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>부산광역시</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)부산도시가스</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1599-0009</td>
								<td style={{verticalAlign: "middle"}}>
									[부산] 부산시
								</td>
							</tr>
							<tr>
								<td rowspan="5" className="gas-table" style={{verticalAlign: "middle"}}>강원도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>강원도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>033-258-8800</td>
								<td style={{verticalAlign: "middle"}}>
									[강원] 춘천시, 홍천· 영월군 (태백시, 정선군)
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>참빛도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1899-9100</td>
								<td style={{verticalAlign: "middle"}}>
									[강원] 속초시, 고성군 (양양군)
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>참빛원주도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1899-9100</td>
								<td style={{verticalAlign: "middle"}}>
									[강원] 원주시, 횡성군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>참빛영동도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1899-9100</td>
								<td style={{verticalAlign: "middle"}}>
									[강원] 강릉· 동해· 삼척시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>명성파워그린(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>033-332-6421</td>
								<td style={{verticalAlign: "middle"}}>
									[강원] (평창군)
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="gas-table" style={{verticalAlign: "middle"}}>충청북도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>참빛충북도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1899-9100</td>
								<td style={{verticalAlign: "middle"}}>
									[충북] 충주시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>충청에너지서비스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1599-0009</td>
								<td style={{verticalAlign: "middle"}}>
									[충북] 청주· 제천시, 청원· 증평· 괴산· 진천· 음성· 영동· 단양· 옥천· 보은군 <br />
									[세종] 세종시 일부
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="gas-table" style={{verticalAlign: "middle"}}>충청남도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>미래엔서해에너지</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1577-6580</td>
								<td style={{verticalAlign: "middle"}}>
									[충남] 당진· 서산시, 홍성· 예산· 태안군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>JB(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1544-0041</td>
								<td style={{verticalAlign: "middle"}}>
									[충남] 천안· 아산· 공주· 보령· 논산· 세종시, 연기· 서천· 금산· 부여군 (청양군) <br />
									[세종] 세종시 일부
								</td>
							</tr>
							<tr>
								<td rowspan="4" className="gas-table" style={{verticalAlign: "middle"}}>경상북도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대성청정에너지(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>054-850-1100</td>
								<td style={{verticalAlign: "middle"}}>
									[경북] 안동· 영주시, 예천군 (의성· 청송· 영양· 봉화· 군위군)
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>영남에너지서비스(주)(구미)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1599-0009</td>
								<td style={{verticalAlign: "middle"}}>
									[경북] 구미· 김천· 상주· 문경시, 청도· 성주군, 칠곡군 일부
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>영남에너지서비스(주)(포항)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1599-0009</td>
								<td style={{verticalAlign: "middle"}}>
									[경북] 포항시, 영덕· 울진군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>서라벌도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1544-5916</td>
								<td style={{verticalAlign: "middle"}}>
									[경북] 경주· 영천시
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="gas-table" style={{verticalAlign: "middle"}}>경상남도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>경남에너지(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>055-260-4000</td>
								<td style={{verticalAlign: "middle"}}>
									[경남] 창원· 김해· 거제· 통영· 밀양시, 함안· 창녕· 고성· 의령군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)지에스이</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1577-1169</td>
								<td style={{verticalAlign: "middle"}}>
									[경남] 진주· 사천시, 거창· 함양군 (하동군)
								</td>
							</tr>
							<tr>
								<td rowspan="3" className="gas-table" style={{verticalAlign: "middle"}}>전라북도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>군산도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>063-440-7700</td>
								<td style={{verticalAlign: "middle"}}>
									[전북] 군산시, 임실· 부안· 진안군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>전북에너지서비스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>063-830-8500</td>
								<td style={{verticalAlign: "middle"}}>
									[전북] 익산· 정읍시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>전북도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>063-240-7700</td>
								<td style={{verticalAlign: "middle"}}>
									[전북] 전주· 김제· 남원시, 완주· 순창· 무주· 고창군
								</td>
							</tr>
							<tr>
								<td rowspan="3" className="gas-table" style={{verticalAlign: "middle"}}>전라남도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>전남도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>061-720-9000</td>
								<td style={{verticalAlign: "middle"}}>
									[전남] 순천· 광양시, 곡성· 구례· 고흥· 보성군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>대화도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>061-650-9000</td>
								<td style={{verticalAlign: "middle"}}>
									[전남] 여수시
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>목포도시가스(주)</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>1899-6360</td>
								<td style={{verticalAlign: "middle"}}>
									[전남] 목포시, 무안· 영암· 강진군
								</td>
							</tr>
							<tr>
								<td className="gas-table" style={{verticalAlign: "middle"}}>제주도</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>(주)제주도시가스</td>
								<td className="gas-table" style={{verticalAlign: "middle"}}>064-749-5184</td>
								<td style={{verticalAlign: "middle"}}>
									[제주] 제주· 서귀포시
								</td>
							</tr>
                        </tbody>
                    </table>
		</div>
	)
}