import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/b1bbyhd6_expires_30_days.png"} 
								className="w-9 h-9 rounded-lg object-fill"
							/>
							<div className="flex flex-col shrink-0 items-start gap-0.5">
								<span className="text-[#163A5F] text-base font-bold" >
									DED LAMEMBA
								</span>
								<span className="text-[#667085] text-[10px] font-bold mr-[23px]" >
									AI DOC GENERATOR
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-5 gap-1 rounded-lg border border-solid border-[#E4E7EC]">
							<span className="text-[#667085] text-[9px] font-bold ml-3" >
								AKTIF WORKSPACE
							</span>
							<div className="flex justify-between items-center self-stretch ml-3">
								<span className="text-[#172033] text-xs font-bold" >
									S1 Manajemen 2026
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2b0pf2fe_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pbrnx1ng_expires_30_days.png"} 
									className="w-1.5 h-1.5 object-fill"
								/>
								<span className="text-[#667085] text-[10px]" >
									DEMO Mode
								</span>
							</div>
						</div>
						<div className="flex flex-col self-stretch mb-5 gap-4">
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									Workspace
								</span>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/om7n8ftj_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="Dashboard"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm font-bold py-2.5 mr-1 border-0"
									/>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/svlodrm2_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uncksdia_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/1irclwam_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8bbwmozm_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										DED Overview
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									Research
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2pcx5vvw_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xi8a9uc7_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/c9xuyhen_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uytengoy_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gx0oxbzw_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/sfhmbzwp_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Method Comparison
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									System
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/k716od5c_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6qr6b597_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/on35ft3o_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[267px] gap-1.5">
							<span className="text-[#667085] text-[11px]" >
								Engine: Hybrid RAG v1.4
							</span>
							<span className="text-[#667085] text-[11px]" >
								LLM: Gemini Pro Academic
							</span>
						</div>
					</div>
					<div className="flex-1 pb-[35px]">
						<div className="flex justify-between items-center self-stretch bg-white py-4 px-8">
							<div className="flex shrink-0 items-center">
								<span className="text-[#667085] text-sm mr-2.5" >
									Admin
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Dashboard
								</span>
							</div>
							<div className="flex items-center w-[481px] gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/m3zpwh51_expires_30_days.png"} 
										className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
									/>
									<input
										placeholder="Cari dokumen, DKPS..."
										value={input2}
										onChange={(event)=>onChangeInput2(event.target.value)}
										className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uelkcve7_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/0nb203d7_expires_30_days.png"} 
										className="w-8 h-8 rounded-2xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-[#172033] text-[13px] font-bold" >
											Dr. Ir. Hendra DEMO
										</span>
										<div className="flex items-center self-stretch gap-1.5">
											<span className="text-[#667085] text-[11px]" >
												Asesor internal
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] pb-[1px] px-1.5 rounded">
												<span className="text-white text-[9px] font-bold" >
													ADMIN
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col self-stretch p-8 gap-6">
							<div className="flex items-start self-stretch">
								<div className="flex flex-1 flex-col items-start gap-1.5">
									<span className="text-[#172033] text-[28px] font-bold" >
										Admin Dashboard
									</span>
									<div className="flex items-center">
										<span className="text-[#163A5F] text-sm font-bold mr-[11px]" >
											Proyek Aktif:
										</span>
										<span className="text-[#172033] text-sm mr-[11px]" >
											Akreditasi S1 Manajemen 2026 · DEMO
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jhyaafls_expires_30_days.png"} 
											className="w-1.5 h-1.5 mr-2 object-fill"
										/>
										<span className="text-[#667085] text-xs" >
											Pembaruan terakhir: 2 menit yang lalu
										</span>
									</div>
								</div>
								<div className="flex shrink-0 items-center mt-[21px] gap-3">
									<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/l94tx6jq_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Export LAP
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/03tlrs9h_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Generate Baru
										</span>
									</button>
								</div>
							</div>
							<div className="flex items-center self-stretch gap-3">
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch gap-[3px]">
										<span className="text-[#667085] text-xs font-bold" >
											Active Projects
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/3v4zfwwh_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											4
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7qedrmos_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] mr-[7px]" >
												+1
											</span>
											<span className="text-[#667085] text-[11px]" >
												1 UPPS Utama, 3 PS
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch gap-0.5">
										<span className="text-[#667085] text-xs font-bold" >
											Total Documents
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/bo1gmre4_expires_30_days.png"} 
											className="w-[19px] h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											48
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/y3ducsox_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] mr-[7px]" >
												+5
											</span>
											<span className="text-[#667085] text-[11px]" >
												DED, DKPS, Evidence
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch gap-1">
										<span className="text-[#667085] text-xs font-bold" >
											Processed Docs
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4f2ze60l_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											42
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ebuimpqe_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] mr-1.5" >
												87.5%
											</span>
											<span className="text-[#667085] text-[11px]" >
												Selesai diproses AI
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch gap-[22px]">
										<span className="text-[#667085] text-xs font-bold" >
											DED Progress
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/1r0v59vi_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											68%
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7r6ti8qt_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] mr-[7px]" >
												+4%
											</span>
											<span className="text-[#667085] text-[11px]" >
												Rata-rata 7 kriteria
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											AI Drafts
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/q4xdyvgq_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											18
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/zpjri0zu_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] mr-1.5" >
												+2
											</span>
											<span className="text-[#667085] text-[11px]" >
												Hasil Gemini Academic
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch gap-[3px]">
										<span className="text-[#667085] text-xs font-bold" >
											Pending Reviews
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xd2q9sod_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											9
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/60u7crrr_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-[#F59E0B] text-[11px] mr-1.5" >
												9 DED
											</span>
											<span className="text-[#667085] text-[11px]" >
												Butuh verifikasi manusia
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="items-start self-stretch relative">
								<div className="flex flex-col self-stretch gap-6">
									<div className="self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch p-5">
											<div className="flex flex-col shrink-0 items-start gap-1">
												<span className="text-[#172033] text-base font-bold" >
													Status Kriteria DED (7 Kriteria LAMEMBA 2025)
												</span>
												<span className="text-[#667085] text-xs mr-[55px]" >
													Pemantauan proses sinkronisasi Hybrid RAG &amp; Evidence
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#E8EEF5] py-[3px] px-2 rounded-md">
												<span className="text-[#163A5F] text-[11px] font-bold" >
													DED Utama
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-[#F7F9FC] py-2.5 px-4">
											<span className="text-[#667085] text-[11px] font-bold" >
												KRITERIA
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px] font-bold mr-[52px]" >
												PROGRESS SINKRONISASI
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[31px]" >
												DRAFT AI
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												STATUS REVIEW
											</span>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													1. Orientasi Strategis
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[18px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[15px] rounded">
													<div className="bg-[#163A5F] w-[101px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													90%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													3 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-emerald-50 py-1 px-2 mr-[54px] gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jxef18k1_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Approved
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													2. Tata Pamong dan Tata Kelola
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[19px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[21px] rounded">
													<div className="bg-[#163A5F] w-[95px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													85%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													4 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-emerald-50 py-1 px-2 mr-[54px] gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/fmh96ama_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Approved
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													3. Pengelolaan Mahasiswa
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[19px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[43px] rounded">
													<div className="bg-[#163A5F] w-[73px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													65%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													2 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 mr-[21px] gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ondup2j0_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													Pending Review
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													4. Pengelolaan Dosen dan Tenaga Kependidikan
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[18px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[71px] rounded">
													<div className="bg-[#163A5F] w-[45px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													40%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													5 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 mr-12 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ls2jvnb8_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													Drafting AI
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													5. Keuangan dan Sarana Prasarana
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[19px]">
												<div className="flex flex-col shrink-0 items-center bg-[#E4E7EC] rounded">
													<div className="bg-[#163A5F] w-[106px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													95%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													2 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-emerald-50 py-1 px-2 mr-[54px] gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jwfpliti_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Approved
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													6. Pendidikan dan Pengajaran
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[19px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[54px] rounded">
													<div className="bg-[#163A5F] w-[62px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													55%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													4 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-red-50 py-1 px-2 mr-[13px] gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/rjktua3w_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-red-500 text-[11px] font-bold" >
													Missing Evidence
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3 px-4">
											<div className="flex flex-1 flex-col items-start mr-4 gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													7. Penelitian dan Pengabdian kepada Masyarakat
												</span>
												<span className="text-[#667085] text-[11px]" >
													LAMEMBA 2025
												</span>
											</div>
											<div className="flex shrink-0 items-center mr-4 gap-[18px]">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[66px] rounded">
													<div className="bg-[#163A5F] w-[50px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-xs font-bold" >
													45%
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start px-1 mr-4">
												<span className="text-[#172033] text-[13px]" >
													3 Dokumen
												</span>
											</div>
											<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 mr-12 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h6c2epcg_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													Drafting AI
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center self-stretch py-4">
											<span className="text-[#163A5F] text-[13px] font-bold" >
												Lihat Detail Analisis RAGAS →
											</span>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-base font-bold" >
												Sistem Kesehatan Pemrosesan Dokumen (Hybrid RAG)
											</span>
											<span className="text-[#667085] text-xs" >
												Status parser DKPS, bukti akreditasi (Evidence), dan integrasi LLM
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<div className="flex flex-1 flex-col items-start bg-[#F7F9FC] py-3 pr-3 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<div className="flex justify-between items-center self-stretch ml-3">
													<span className="text-[#667085] text-xs font-bold" >
														Uploaded
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f0s3dpbq_expires_30_days.png"} 
														className="w-3.5 h-3.5 object-fill"
													/>
												</div>
												<span className="text-[#172033] text-xl font-bold ml-3" >
													12 Docs
												</span>
												<span className="text-[#667085] text-[11px] ml-3" >
													Menunggu antrian parser
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-blue-50 py-3 pr-3 gap-2 rounded-lg border border-solid border-blue-500">
												<div className="flex justify-between items-center self-stretch ml-3">
													<span className="text-blue-500 text-xs font-bold" >
														Processing
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/63e3lzt1_expires_30_days.png"} 
														className="w-3.5 h-3.5 object-fill"
													/>
												</div>
												<span className="text-blue-500 text-xl font-bold ml-3" >
													3 Docs
												</span>
												<span className="text-blue-500 text-[11px] ml-3" >
													Sedang chunking &amp; vectorizing
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-emerald-50 py-3 pr-3 gap-2 rounded-lg border border-solid border-emerald-500">
												<div className="flex justify-between items-center self-stretch ml-3">
													<span className="text-emerald-500 text-xs font-bold" >
														Processed
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7se7hfj9_expires_30_days.png"} 
														className="w-3.5 h-3.5 object-fill"
													/>
												</div>
												<span className="text-emerald-500 text-xl font-bold ml-3" >
													31 Docs
												</span>
												<span className="text-emerald-500 text-[11px] ml-3" >
													Vector store sinkron
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-red-50 py-3 pr-3 gap-2 rounded-lg border border-solid border-red-500">
												<div className="flex justify-between items-center self-stretch ml-3">
													<span className="text-red-500 text-xs font-bold" >
														Failed
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hft2odc3_expires_30_days.png"} 
														className="w-3.5 h-3.5 object-fill"
													/>
												</div>
												<span className="text-red-500 text-xl font-bold ml-3" >
													2 Docs
												</span>
												<span className="text-red-500 text-[11px] ml-3" >
													Error format / OCR gagal
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col w-[360px] absolute top-0 right-[-28px] gap-6">
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-base font-bold" >
												Attention Required
											</span>
											<span className="text-[#667085] text-xs" >
												Isu krusial yang menghambat generate draft
											</span>
										</div>
										<div className="flex flex-col self-stretch gap-3">
											<div className="flex items-start self-stretch bg-red-50 p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/89ydl9t7_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-lg object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-1">
													<span className="text-[#172033] text-[13px] font-bold" >
														Failed Processing: DKPS_2025_Final.xlsx
													</span>
													<span className="text-[#667085] text-[11px]" >
														Parser gagal membaca baris kriteria 6 (Kurikulum). Mohon cek format sel.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch bg-amber-100 p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tu9guimr_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-lg object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-1">
													<span className="text-[#172033] text-[13px] font-bold" >
														Missing Evidence: Sertifikat Akreditasi PS
													</span>
													<span className="text-[#667085] text-[11px]" >
														Kriteria 3 mendeteksi referensi dokumen eksternal tanpa lampiran PDF di Knowledge Base.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch bg-blue-50 p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/904zjbg6_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-lg object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-1">
													<span className="text-[#172033] text-[13px] font-bold" >
														Pending Human Review: Kriteria 5
													</span>
													<span className="text-[#667085] text-[11px] w-[251px]" >
														Draft Gemini untuk bagian Prasarana sudah siap, menanti persetujuan Asesor Mike Andrew.
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<span className="text-[#172033] text-base font-bold ml-5" >
											Aktivitas Terkini
										</span>
										<div className="flex flex-col self-stretch ml-5 gap-4">
											<div className="flex items-start self-stretch gap-3">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/j9g4qvou_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-[20px] object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Upload Evidence baru
													</span>
													<span className="text-[#667085] text-xs w-[264px]" >
														Dokumen `Rencana_Strategis_UPPS_2025.pdf` berhasil ditambahkan ke RAG.
													</span>
													<span className="text-[#667085] text-[10px]" >
														5 menit yang lalu · Mike A.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch gap-3">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2s5m6ag9_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-[20px] object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Gemini Auto-Draft Kriteria 4
													</span>
													<span className="text-[#667085] text-xs w-[258px]" >
														Generate draft bagian &#39;Sumber Daya Manusia&#39; menggunakan model Gemini Academic.
													</span>
													<span className="text-[#667085] text-[10px]" >
														15 menit yang lalu · AI System
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch gap-3">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lcbrj19y_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-[20px] object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Komentar Reviewer Kriteria 2
													</span>
													<span className="text-[#667085] text-xs w-[265px]" >
														&quot;Data jumlah dosen tidak sinkron dengan DKPS Tabel 3.a. Harap regenerasi ulang.&quot;
													</span>
													<span className="text-[#667085] text-[10px]" >
														1 jam yang lalu · Dr. Ir. Hendra
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch gap-3">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9th4g14d_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-[20px] object-fill"
												/>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Approved Version Kriteria 1
													</span>
													<span className="text-[#667085] text-xs w-[271px]" >
														Bab Visi Misi selesai direview &amp; ditandai sebagai versi final LAMEMBA.
													</span>
													<span className="text-[#667085] text-[10px]" >
														3 jam yang lalu · Dekan FEB
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}