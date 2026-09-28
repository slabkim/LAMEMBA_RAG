import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch relative">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/khu9klaj_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h6cusmx6_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ekt1a1li_expires_30_days.png"} 
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
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kydd6w6l_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm font-bold" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8gajnceq_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/zvkj327j_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="Documents"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm py-2.5 mr-1 border-0"
									/>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pe7n4se9_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/vhc75xnb_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gvcawvxe_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gu7a9tal_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jmc66d31_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/dpiw8ebx_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t5s346kb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/i4zewx8c_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/if7478mh_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/14b0n49m_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/axlkm4dl_expires_30_days.png"} 
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
					<div className="flex-1 pb-[230px]">
						<div className="flex items-center self-stretch bg-white py-4 px-8">
							<div className="flex shrink-0 items-center mr-[81px]">
								<span className="text-[#667085] text-sm mr-2.5" >
									Workspace
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Documents
								</span>
							</div>
							<div className="flex flex-1 items-center gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hviews9b_expires_30_days.png"} 
										className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
									/>
									<input
										placeholder="Cari dokumen, bukti..."
										value={input2}
										onChange={(event)=>onChangeInput2(event.target.value)}
										className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gilliz45_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/42xgd9he_expires_30_days.png"} 
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
							<div className="flex items-center self-stretch">
								<div className="flex flex-1 flex-col items-start gap-1.5">
									<span className="text-[#172033] text-[28px] font-bold" >
										Documents
									</span>
									<span className="text-[#667085] text-sm w-[550px]" >
										Kelola file DED, DKPS, dan bukti pendukung (Evidence) akreditasi LAMEMBA secara komprehensif.
									</span>
								</div>
								<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/nlylx514_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-white text-[13px] font-bold" >
										Upload Dokumen
									</span>
								</button>
							</div>
							<div className="flex flex-col items-center self-stretch bg-white py-8 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f9yf7owi_expires_30_days.png"} 
									className="w-8 h-8 rounded-xl object-fill"
								/>
								<div className="flex flex-col items-center gap-1">
									<span className="text-[#172033] text-sm font-bold" >
										Tarik dan lepas file di sini untuk upload
									</span>
									<span className="text-[#667085] text-xs" >
										Mendukung format PDF, DOCX, atau XLSX (Maks. 50 MB)
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch relative">
								<div className="flex items-center self-stretch bg-white py-4 rounded-lg border border-solid border-[#E4E7EC]">
									<div className="flex shrink-0 items-center bg-[#F7F9FC] py-2 px-3 ml-4 mr-3 gap-2 rounded-md border border-solid border-[#E4E7EC]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/vipejed9_expires_30_days.png"} 
											className="w-4 h-4 rounded-md object-fill"
										/>
										<span className="text-[#667085] text-[13px]" >
											Cari berdasarkan nama...
										</span>
									</div>
									<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 mr-3 gap-8 rounded-md border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#172033] text-[13px]" >
											Project: Semua
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/usz09yg6_expires_30_days.png"} 
											className="w-3.5 h-3.5 rounded-md object-fill"
										/>
									</button>
									<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[18px] rounded-md border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#172033] text-[13px]" >
											Tipe: Semua
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ndw2iapz_expires_30_days.png"} 
											className="w-3.5 h-3.5 rounded-md object-fill"
										/>
									</button>
								</div>
								<button className="flex flex-col items-start bg-white text-left absolute top-4 right-[-6px] py-2 px-3 rounded-md border border-solid border-[#E4E7EC]"
									onClick={()=>alert("Pressed!")}>
									<div className="flex items-center gap-4">
										<span className="text-[#172033] text-[13px]" >
											Status: Semua
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9pb46hgu_expires_30_days.png"} 
											className="w-3.5 h-3.5 rounded-md object-fill"
										/>
									</div>
								</button>
							</div>
							<div className="flex flex-col items-start self-stretch relative">
								<div className="self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch bg-[#F7F9FC] py-2.5 px-4">
										<span className="text-[#667085] text-[11px] font-bold mr-[23px]" >
											[ ]
										</span>
										<span className="text-[#667085] text-[11px] font-bold" >
											NAMA DOKUMEN
										</span>
										<div className="flex-1 self-stretch">
										</div>
										<span className="text-[#667085] text-[11px] font-bold mr-[45px]" >
											TIPE
										</span>
										<span className="text-[#667085] text-[11px] font-bold mr-[33px]" >
											UKURAN
										</span>
										<span className="text-[#667085] text-[11px] font-bold mr-9" >
											TANGGAL
										</span>
										<span className="text-[#667085] text-[11px] font-bold mr-11" >
											STATUS RAG
										</span>
										<span className="text-[#667085] text-[11px] font-bold mr-3" >
											CHUNKS
										</span>
										<span className="text-[#667085] text-[11px] font-bold" >
											ACTIONS
										</span>
									</div>
									<div className="flex items-center self-stretch bg-[#E8EEF5] py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start pr-[13px] mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												Renstra_UPPS_2025.pdf · DEMO
											</span>
											<span className="text-[#667085] text-[11px]" >
												S1 Manajemen 2026 · Kriteria 1 &amp; 2
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F2F4F7] py-0.5 px-2 mr-2 rounded-md">
											<span className="text-[#344054] text-xs font-bold" >
												Evidence
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-[37px]" >
											4.2 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-3.5" >
											12 Feb 2026
										</span>
										<div className="flex flex-col shrink-0 items-center mr-6">
											<div className="flex items-center bg-blue-50 py-1 px-2 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uaml0hwu_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-blue-500 text-[11px] font-bold" >
													Processing
												</span>
											</div>
										</div>
										<span className="text-[#172033] text-[13px]" >
											142
										</span>
									</div>
									<div className="flex items-center self-stretch bg-white py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												DKPS_Akademik_V2.xlsx · DEMO
											</span>
											<span className="text-[#667085] text-[11px] mr-[41px]" >
												S1 Manajemen 2026 · Kriteria 4
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F9F5FF] py-0.5 px-2 mr-[19px] rounded-md">
											<span className="text-[#6941C6] text-xs font-bold" >
												DKPS
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-[37px]" >
											2.5 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-4" >
											11 Feb 2026
										</span>
										<div className="flex flex-col shrink-0 items-center mr-6">
											<div className="flex items-center bg-emerald-50 py-1 px-2 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ky3lzbrs_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Processed
												</span>
											</div>
										</div>
										<span className="text-[#172033] text-[13px]" >
											412
										</span>
									</div>
									<div className="flex items-center self-stretch bg-white py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												DED_Kriteria_5_Keuangan.docx · DEMO
											</span>
											<span className="text-[#667085] text-[11px] mr-[41px]" >
												S1 Manajemen 2026 · Kriteria 5
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#EEF4FF] py-0.5 px-2 mr-[27px] rounded-md">
											<span className="text-[#3538CD] text-xs font-bold" >
												DED
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-[42px]" >
											1.1 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-3.5" >
											10 Feb 2026
										</span>
										<div className="flex flex-col shrink-0 items-center mr-[27px]">
											<div className="flex items-center bg-emerald-50 py-1 px-2 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/aylasisu_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Processed
												</span>
											</div>
										</div>
										<span className="text-[#172033] text-[13px]" >
											89
										</span>
									</div>
									<div className="flex items-center self-stretch bg-white py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												Sertifikat_Akreditasi_BANPT.pdf · DEMO
											</span>
											<span className="text-[#667085] text-[11px] mr-[41px]" >
												S1 Manajemen 2026 · Kriteria 3
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F2F4F7] py-0.5 px-2 mr-2 rounded-md">
											<span className="text-[#344054] text-xs font-bold" >
												Evidence
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-10" >
											1.8 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-3.5" >
											10 Feb 2026
										</span>
										<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 mr-[47px] gap-1.5 rounded-md">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/359syisi_expires_30_days.png"} 
												className="w-3 h-3 rounded-md object-fill"
											/>
											<span className="text-[#F59E0B] text-[11px] font-bold" >
												Uploaded
											</span>
										</div>
										<span className="text-[#172033] text-[13px]" >
											-
										</span>
									</div>
									<div className="flex items-center self-stretch bg-white py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start pr-[15px] mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												DKPS_2025_Final.xlsx · DEMO
											</span>
											<span className="text-[#667085] text-[11px]" >
												S1 Manajemen 2026 · Kriteria 6
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#F9F5FF] py-0.5 px-2 mr-[19px] rounded-md">
											<span className="text-[#6941C6] text-xs font-bold" >
												DKPS
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-10" >
											1.8 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-3" >
											09 Feb 2026
										</span>
										<div className="flex shrink-0 items-center bg-red-50 py-1 px-2 mr-[67px] gap-1.5 rounded-md">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7ddu27d1_expires_30_days.png"} 
												className="w-3 h-3 rounded-md object-fill"
											/>
											<span className="text-red-500 text-[11px] font-bold" >
												Failed
											</span>
										</div>
										<span className="text-[#172033] text-[13px]" >
											-
										</span>
									</div>
									<div className="flex items-center self-stretch bg-white py-3.5">
										<span className="text-[#667085] text-[13px] ml-4 mr-[22px]" >
											[ ]
										</span>
										<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												Laporan_Evaluasi_Diri_Draft.pdf · DEMO
											</span>
											<span className="text-[#667085] text-[11px] mr-[13px]" >
												S1 Manajemen 2026 · Semua Kriteria
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-[#EEF4FF] py-0.5 px-2 mr-[27px] rounded-md">
											<span className="text-[#3538CD] text-xs font-bold" >
												DED
											</span>
										</div>
										<span className="text-[#667085] text-[13px] mr-[37px]" >
											8.4 MB
										</span>
										<span className="text-[#667085] text-[13px] mr-3" >
											08 Feb 2026
										</span>
										<div className="flex flex-col shrink-0 items-center mr-[25px]">
											<div className="flex items-center bg-emerald-50 py-1 px-2 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/60uzsnqo_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-emerald-500 text-[11px] font-bold" >
													Processed
												</span>
											</div>
										</div>
										<span className="text-[#172033] text-[13px]" >
											712
										</span>
									</div>
									<div className="flex justify-between items-center self-stretch p-4">
										<span className="text-[#667085] text-[13px]" >
											Menampilkan 1-6 dari 48 dokumen
										</span>
										<div className="flex shrink-0 items-center gap-2">
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-xs" >
													Sebelumnya
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-xs" >
													Berikutnya
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start absolute top-14 right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/eo8viwst_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/wp2alx1m_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/sux0g5ll_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start absolute top-[115px] right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ckqnrq9o_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/57t0wylm_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/735rf1uz_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start absolute top-[174px] right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/l7ku5aaz_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9efaletp_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/r8xr37m5_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start absolute bottom-[199px] right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/a6a5lvss_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/wzboli7w_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/o4507n65_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start absolute bottom-[140px] right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2iswjf2f_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/nih1ts1x_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/b7ry60xa_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start absolute bottom-[81px] right-[-16px] pr-8">
									<div className="flex items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4b8y3mx4_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6h2ahsnr_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/i5yk8jpl_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-start bg-white absolute top-[380px] right-[254px] py-2 pl-3 pr-[38px] rounded-md border border-solid border-[#E4E7EC]">
						<span className="text-[#172033] text-[13px]" >
							Kriteria: Semua
						</span>
					</div>
					<div className="flex flex-col bg-white w-[380px] pt-6 px-6">
						<div className="flex justify-between items-center self-stretch mb-5">
							<div className="flex flex-col shrink-0 items-start gap-1">
								<span className="text-blue-500 text-[11px] font-bold mr-[141px]" >
									Processing Detail
								</span>
								<span className="text-[#172033] text-base font-bold" >
									Renstra_UPPS_2025.pdf · DEMO
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xtds2f2f_expires_30_days.png"} 
								className="w-[18px] h-[18px] object-fill"
							/>
						</div>
						<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
						</div>
						<div className="self-stretch mb-5">
							<div className="flex items-center self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6jesibd1_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 justify-between items-center">
									<span className="text-[#172033] text-[13px]" >
										Extract text
									</span>
									<span className="text-[#667085] text-[11px]" >
										15:02:11
									</span>
								</div>
							</div>
							<div className="self-stretch h-4">
							</div>
							<div className="flex items-center self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/yaqtkfxz_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 justify-between items-center">
									<span className="text-[#172033] text-[13px]" >
										Clean &amp; Normalization
									</span>
									<span className="text-[#667085] text-[11px]" >
										15:02:24
									</span>
								</div>
							</div>
							<div className="self-stretch h-4">
							</div>
							<div className="flex items-center self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9oiyzfaf_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 justify-between items-center">
									<span className="text-[#172033] text-[13px]" >
										Chunking &amp; Tokenization
									</span>
									<span className="text-[#667085] text-[11px]" >
										15:02:40
									</span>
								</div>
							</div>
							<div className="self-stretch h-4">
							</div>
							<div className="flex items-start self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/609hc88b_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#172033] text-[13px] font-bold" >
											Generating Vector Embeddings
										</span>
										<span className="text-[#667085] text-[11px]" >
											15:02:45
										</span>
									</div>
									<span className="text-blue-500 text-[11px]" >
										Sedang menghitung vector embedding...
									</span>
								</div>
							</div>
							<div className="self-stretch h-4">
							</div>
							<div className="flex items-center self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/djak1pmm_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#172033] text-[13px]" >
										BM25 index generation
									</span>
								</div>
							</div>
							<div className="self-stretch h-4">
							</div>
							<div className="flex items-center self-stretch gap-3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f5ruf66n_expires_30_days.png"} 
									className="w-4 h-4 object-fill"
								/>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#172033] text-[13px]" >
										Ready for Hybrid RAG
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col self-stretch bg-[#F5F8FF] p-3 mb-5 gap-2 rounded-lg border border-solid border-[#D0E0FF]">
							<div className="flex items-center self-stretch gap-2">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hhczdxky_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
								<span className="text-blue-500 text-xs font-bold" >
									Hybrid RAG Integration
								</span>
							</div>
							<span className="text-[#3B5280] text-[11px]" >
								Setelah indexing selesai, Semantic Retrieval (embeddings) dan BM25 akan digabung melalui algoritma RRF (Reciprocal Rank Fusion) untuk mengoptimalkan keakuratan pencarian bukti LAMEMBA.
							</span>
						</div>
						<button className="flex flex-col items-center self-stretch bg-transparent text-left py-2.5 mb-5 rounded-lg border border-solid border-red-500"
							onClick={()=>alert("Pressed!")}>
							<span className="text-red-500 text-[13px] font-bold" >
								Batalkan Proses
							</span>
						</button>
						<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
						</div>
						<div className="flex flex-col items-start self-stretch mb-[502px] gap-2.5">
							<span className="text-[#667085] text-[11px] font-bold" >
								Proses Gagal Lainnya
							</span>
							<div className="flex flex-col items-start self-stretch bg-red-50 py-3 pr-3 gap-2.5 rounded-lg border border-solid border-[#FECDCA]">
								<div className="flex justify-between items-center self-stretch ml-3">
									<span className="text-[#172033] text-[13px] font-bold" >
										DKPS_2025_Final.xlsx · DEMO
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9jq3picd_expires_30_days.png"} 
										className="w-3.5 h-3.5 object-fill"
									/>
								</div>
								<span className="text-red-500 text-[11px] ml-3" >
									Parser gagal membaca kriteria 6 (Kurikulum). Mohon sesuaikan format baris dengan template excel resmi.
								</span>
								<button className="flex items-center bg-white text-left py-1.5 px-3 ml-3 gap-1.5 rounded-md border border-solid border-[#FDA29B]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/v7cjfjk4_expires_30_days.png"} 
										className="w-3 h-3 rounded-md object-fill"
									/>
									<span className="text-[#163A5F] text-xs font-bold" >
										Retry Processing
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}