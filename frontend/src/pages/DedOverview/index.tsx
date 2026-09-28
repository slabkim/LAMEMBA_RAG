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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/m5c35tmh_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/r5z8o1sj_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7yyqev4c_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xpvz6lzb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm font-bold" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/mx7vjd9u_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/04fruee0_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/fiucqaff_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/47lrm38r_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="DED Overview"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm py-2.5 mr-1 border-0"
									/>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									Research
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8tu7l12a_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h4yqxyts_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/n88t45zb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8gq3f9bg_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/p923f0da_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/rx94arfe_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/677cix1z_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/snytnvby_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lc50xzrm_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[1164px] gap-1.5">
							<span className="text-[#667085] text-[11px]" >
								Engine: Hybrid RAG v1.4
							</span>
							<span className="text-[#667085] text-[11px]" >
								LLM: Gemini Pro Academic
							</span>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-between items-center self-stretch bg-white py-4 px-8">
							<div className="flex shrink-0 items-center">
								<span className="text-[#667085] text-sm mr-2.5" >
									Workspace
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									DED Overview
								</span>
							</div>
							<div className="flex items-center w-[481px] gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6r1x9qm5_expires_30_days.png"} 
										className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
									/>
									<input
										placeholder="Cari kriteria, bukti, RAG..."
										value={input2}
										onChange={(event)=>onChangeInput2(event.target.value)}
										className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/wnnuyx2s_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/alo31gg5_expires_30_days.png"} 
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
										DED Overview
									</span>
									<div className="flex items-center">
										<span className="text-[#163A5F] text-sm font-bold mr-[11px]" >
											Proyek Aktif:
										</span>
										<span className="text-[#172033] text-sm mr-[11px]" >
											Akreditasi S1 Manajemen 2026 · DEMO
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/j198k23q_expires_30_days.png"} 
											className="w-1.5 h-1.5 mr-2 object-fill"
										/>
										<span className="text-[#667085] text-[13px]" >
											Pembaruan terakhir: 2 menit yang lalu
										</span>
									</div>
								</div>
								<div className="flex shrink-0 items-center mt-[21px] gap-3">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-4 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#172033] text-[13px] font-bold" >
											Lihat Struktur DED
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/r67r7kks_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Run Gemini RAG Draft
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
								<div className="flex justify-between items-center self-stretch ml-5">
									<span className="text-[#172033] text-sm font-bold" >
										Progres Kompilasi Dokumen Evaluasi Diri (Keseluruhan)
									</span>
									<span className="text-[#163A5F] text-sm" >
										68% Terisi · DEMO Mode
									</span>
								</div>
								<div className="items-start self-stretch bg-[#E4E7EC] ml-5 rounded-md">
									<div className="bg-[#163A5F] w-[760px] h-3">
									</div>
								</div>
								<span className="text-[#667085] text-[11px] ml-5" >
									* Persentase menunjukkan volume kelengkapan draft narasi kriteria dan penautan evidence (bukti fisik) dalam sistem Hybrid RAG. Tidak merepresentasikan nilai kelulusan akreditasi.
								</span>
							</div>
							<div className="flex items-center self-stretch">
								<div className="flex flex-1 flex-col bg-white py-4 mr-3 gap-2.5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch mx-4">
										<span className="text-[#667085] text-[10px] font-bold" >
											TOTAL SECTIONS
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/x3tgwl2u_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch ml-4 mr-[30px] gap-0.5">
										<span className="text-[#172033] text-xl font-bold" >
											7 Kriteria
										</span>
										<span className="text-[#667085] text-[11px]" >
											Sesuai Standar LAMEMBA 2025
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-4 mr-[13px] gap-2.5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[10px] font-bold" >
											AI DRAFTS READY
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/z7go1yoo_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-0.5">
										<span className="text-[#172033] text-xl font-bold" >
											18 Sub-Bab
										</span>
										<span className="text-[#667085] text-[11px]" >
											Generated by Gemini Pro Academic
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white py-4 mr-3 gap-2.5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch mx-4">
										<span className="text-[#667085] text-[10px] font-bold" >
											APPROVED
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cemu1rw7_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch ml-4 mr-[42px] gap-0.5">
										<span className="text-[#172033] text-xl font-bold" >
											2 Kriteria
										</span>
										<span className="text-[#667085] text-[11px]" >
											Visi Misi &amp; Keuangan Disetujui
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white py-4 mr-[13px] gap-2.5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch mx-4">
										<span className="text-[#667085] text-[10px] font-bold" >
											EVIDENCE LINKED
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ohekqzty_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch ml-4 mr-[39px] gap-0.5">
										<span className="text-[#172033] text-xl font-bold" >
											31 Bukti
										</span>
										<span className="text-[#667085] text-[11px]" >
											Kutipan Dokumen Terverifikasi
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white py-4 gap-2.5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch mx-4">
										<span className="text-[#667085] text-[10px] font-bold" >
											NEEDS HUMAN REVIEW
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/15sj40vs_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch ml-4 mr-[45px] gap-0.5">
										<span className="text-[#172033] text-xl font-bold" >
											9 Butuh Review
										</span>
										<span className="text-[#667085] text-[11px]" >
											Tunda Persetujuan Asesor
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-5">
								<span className="text-[#172033] text-lg font-bold" >
									Rincian Kriteria Akreditasi LAMEMBA 2025
								</span>
								<div className="flex justify-between items-center self-stretch">
									<div className="flex shrink-0 items-center gap-3">
										<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h1oc2mao_expires_30_days.png"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-white text-[13px] font-bold" >
												Tambah Kriteria
											</span>
										</button>
										<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/w44c5r5d_expires_30_days.png"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-[#163A5F] text-[13px] font-bold" >
												Kelola Kriteria
											</span>
										</button>
									</div>
									<span className="text-[#667085] text-xs font-bold" >
										7 kriteria aktif
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch gap-5">
									<div className="flex items-center self-stretch gap-5">
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-[102px]" >
														Kriteria 1
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Orientasi Strategis
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														Approved
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[18px] mr-3 rounded">
													<div className="bg-emerald-500 w-[162px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-[15px]" >
													90%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(4 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														3
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														3
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														8 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Visi Keilmuan
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Tujuan UPPS
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Strategi Pencapaian
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Keunikan PS
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-[178px]" >
														Kriteria 2
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Tata Pamong dan Tata Kelola
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														Approved
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[27px] mr-3 rounded">
													<div className="bg-emerald-500 w-[153px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-[15px]" >
													85%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(2 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														4
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														3
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														6 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Sistem Tata Pamong
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Penjaminan Mutu Internal (SPMI)
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-5">
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-[141px]" >
														Kriteria 3
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Pengelolaan Mahasiswa
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-amber-100 py-[3px] px-2 rounded-md">
													<span className="text-[#F59E0B] text-[11px] font-bold" >
														Pending Review
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[63px] mr-3 rounded">
													<div className="bg-[#F59E0B] w-[117px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-[15px]" >
													65%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(5 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														2
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														1
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														4 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Rekrutmen Mahasiswa
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Layanan Kemahasiswaan
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Daya Tarik PS
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-48" >
														Kriteria 4
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Pengelolaan Dosen dan Tendik
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-amber-100 py-[3px] px-2 rounded-md">
													<span className="text-[#F59E0B] text-[11px] font-bold" >
														Drafting AI
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[108px] mr-3 rounded">
													<div className="bg-[#F59E0B] w-[72px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-3.5" >
													40%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(4 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														5
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														2
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														3 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Kualifikasi Dosen
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Kinerja &amp; Rekam Jejak
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Tenaga Kependidikan
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-5">
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-[205px]" >
														Kriteria 5
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Keuangan dan Sarana Prasarana
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														Approved
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-center bg-[#E4E7EC] mr-3 rounded">
													<div className="bg-emerald-500 w-[171px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-[15px]" >
													95%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(2 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														2
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														2
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														10 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Kecukupan Dana
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Sarana Pembelajaran &amp; Prasarana
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
										<div className="flex-1 bg-white p-5 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch mb-4">
												<div className="flex flex-col shrink-0 items-start gap-1">
													<span className="text-[#163A5F] text-[11px] font-bold mr-[165px]" >
														Kriteria 6
													</span>
													<span className="text-[#172033] text-base font-bold" >
														Pendidikan dan Pengajaran
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-red-50 py-[3px] px-2 rounded-md">
													<span className="text-red-500 text-[11px] font-bold" >
														Missing Evidence
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch mb-4">
												<div className="shrink-0 items-start bg-[#E4E7EC] pr-[81px] mr-3 rounded">
													<div className="bg-red-500 w-[99px] h-2">
													</div>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-3.5" >
													55%
												</span>
												<span className="text-[#667085] text-[11px]" >
													(2 Dimensi)
												</span>
											</div>
											<div className="flex items-center self-stretch mb-4 gap-4">
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft AI:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														4
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<span className="text-[#667085] text-[11px] font-bold" >
														Reviewed:
													</span>
													<span className="text-[#172033] text-xs font-bold" >
														1
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-[9px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Evidence Linked:
													</span>
													<span className="text-[#163A5F] text-xs font-bold" >
														2 files
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
												<span className="text-[#667085] text-[11px] font-bold ml-3" >
													PREVIEW DIMENSI
												</span>
												<div className="flex items-center self-stretch ml-3 gap-1.5">
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Kurikulum OBE
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px]" >
															Sistem Asesmen Pembelajaran
														</span>
													</div>
												</div>
											</div>
											<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-[#163A5F] text-xs font-bold" >
													Buka Kriteria &amp; Editor AI →
												</span>
											</div>
										</div>
									</div>
									<div className="bg-white w-[548px] p-5 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch mb-4">
											<div className="flex flex-col shrink-0 items-start gap-1">
												<span className="text-[#163A5F] text-[11px] font-bold mr-[194px]" >
													Kriteria 7
												</span>
												<span className="text-[#172033] text-base font-bold" >
													Penelitian &amp; Pengabdian (PkM)
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-amber-100 py-[3px] px-2 rounded-md">
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													Drafting AI
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch mb-4">
											<div className="shrink-0 items-start bg-[#E4E7EC] pr-[99px] mr-3 rounded">
												<div className="bg-[#F59E0B] w-[81px] h-2">
												</div>
											</div>
											<span className="text-[#172033] text-[13px] font-bold mr-[15px]" >
												45%
											</span>
											<span className="text-[#667085] text-[11px]" >
												(2 Dimensi)
											</span>
										</div>
										<div className="flex items-center self-stretch mb-4 gap-4">
											<div className="flex shrink-0 items-center gap-2">
												<span className="text-[#667085] text-[11px] font-bold" >
													Draft AI:
												</span>
												<span className="text-[#172033] text-xs font-bold" >
													3
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<span className="text-[#667085] text-[11px] font-bold" >
													Reviewed:
												</span>
												<span className="text-[#172033] text-xs font-bold" >
													1
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-[9px]">
												<span className="text-[#667085] text-[11px] font-bold" >
													Evidence Linked:
												</span>
												<span className="text-[#163A5F] text-xs font-bold" >
													4 files
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-4 gap-1.5 rounded-lg">
											<span className="text-[#667085] text-[11px] font-bold ml-3" >
												PREVIEW DIMENSI
											</span>
											<div className="flex items-center self-stretch ml-3 gap-1.5">
												<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
													<span className="text-[#172033] text-[11px]" >
														Keterlibatan Mahasiswa
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-white py-0.5 px-1.5 rounded border border-solid border-[#E4E7EC]">
													<span className="text-[#172033] text-[11px]" >
														Luaran Publikasi Jurnal
													</span>
												</div>
											</div>
										</div>
										<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[15px]">
										</div>
										<div className="flex flex-col items-start self-stretch">
											<span className="text-[#163A5F] text-xs font-bold" >
												Buka Kriteria &amp; Editor AI →
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-1 flex-col bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#172033] text-base font-bold" >
											Struktur Dokumen DED
										</span>
										<div className="flex flex-col shrink-0 items-start bg-[#F7F9FC] py-[1px] px-1.5 rounded">
											<span className="text-[#667085] text-[10px] font-bold" >
												7 kriteria · 21 dimensi · 58 indikator
											</span>
										</div>
									</div>
									<div className="flex flex-col self-stretch gap-2">
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5rz6jn02_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Identitas Pengusul &amp; Unit Pengelola (UPPS)
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/zrm3i30x_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Identitas Tim Penyusun DED (Asesor &amp; Kaprodi)
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/icz47fnx_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Kata Pengantar &amp; Lembar Pernyataan
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9pt7vity_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Ringkasan Eksekutif
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8ka9uun3_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												BAB I: Pendahuluan
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kgcvtvzw_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												BAB II: Dokumen Evaluasi Diri (7 Kriteria)
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/rr97ro6a_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Analisis Strategi Pengembangan &amp; Keberlanjutan PS
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/eklq99n7_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												BAB III: Penutup
											</span>
										</div>
										<div className="flex items-center self-stretch py-1 gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6jmreeo2_expires_30_days.png"} 
												className="w-1 h-1 object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Lampiran (DKPS &amp; Link Evidence Fisik)
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-base font-bold" >
											Peringatan &amp; Fokus Utama (Evidence-First)
										</span>
										<span className="text-[#667085] text-[13px]" >
											Isu integrasi RAG dan review manusia yang terdeteksi oleh sistem
										</span>
									</div>
									<div className="flex flex-col self-stretch gap-3">
										<div className="flex items-start self-stretch bg-red-50 p-3 gap-3 rounded-lg">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/71tuhkss_expires_30_days.png"} 
												className="w-[18px] h-[18px] rounded-lg object-fill"
											/>
											<div className="flex flex-1 flex-col items-start gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													Evidence Coverage Rendah: Kriteria 6 (Pendidikan)
												</span>
												<span className="text-[#667085] text-[11px] w-[476px]" >
													Sistem Gemini mendeteksi klaim implementasi kurikulum OBE tanpa penautan dokumen fisik kurikulum terbaru di RAG Store.
												</span>
											</div>
										</div>
										<div className="flex items-start self-stretch bg-amber-100 p-3 gap-3 rounded-lg">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4topdy1y_expires_30_days.png"} 
												className="w-[18px] h-[18px] rounded-lg object-fill"
											/>
											<div className="flex flex-1 flex-col items-start gap-1">
												<span className="text-[#172033] text-[13px] font-bold" >
													Human Review Tertunda: Kriteria 3 (Mahasiswa)
												</span>
												<span className="text-[#667085] text-[11px] w-[482px]" >
													2 draf narasi tentang rekruitmen mahasiswa asing memerlukan validasi eksternal dari Kaprodi S1 Manajemen.
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
	)
}