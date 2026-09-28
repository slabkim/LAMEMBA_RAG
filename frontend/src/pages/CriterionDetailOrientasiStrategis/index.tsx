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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8jpt9jji_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/1xe428tj_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/js39naom_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/stg8ex3f_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm font-bold" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/3bhffs0l_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ewg6kg42_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8t0p34ih_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ywffea1v_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f4jxz7e8_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8v7slbkp_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9q3du031_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ufgfd2r5_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/svr6ywfb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8jpl4s5p_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/qnu3gaho_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jti6kcfh_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ppy6f5qy_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[929px] gap-1.5">
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
									DED Overview
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#667085] text-sm mr-3" >
									Kriteria 1
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Orientasi Strategis
								</span>
							</div>
							<div className="flex items-center w-[481px] gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/bfflrjbl_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5ci5rgtd_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/yimfoba6_expires_30_days.png"} 
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
									<div className="flex items-center gap-4">
										<span className="text-[#172033] text-[28px] font-bold" >
											Kriteria 1 - Orientasi Strategis
										</span>
										<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-[3px] px-3 rounded-md">
											<span className="text-white text-[11px] font-bold" >
												DEMO MODE
											</span>
										</div>
									</div>
									<span className="text-[#667085] text-sm" >
										Kompilasi Visi, Misi, Tujuan, dan Strategi (VMTS) sesuai standar akreditasi LAMEMBA 2025.
									</span>
								</div>
								<div className="flex shrink-0 items-center gap-3">
									<button className="flex shrink-0 items-center bg-white text-left py-[9px] px-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jkrvfaah_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Lihat Semua Evidence
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-[9px] px-4 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/3r5bg9ow_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Buka Workspace
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-col self-stretch bg-white p-5 gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
								style={{
									boxShadow: "0px 1px 2px #1018280D"
								}}>
								<div className="flex justify-between items-center self-stretch">
									<span className="text-[#172033] text-sm font-bold" >
										Progres Penyusunan Orientasi Strategis
									</span>
									<span className="text-[#163A5F] text-sm font-bold" >
										90% Lengkap (Approved)
									</span>
								</div>
								<div className="self-stretch bg-[#E4E7EC] pr-[68px] rounded-md">
									<div className="self-stretch bg-emerald-500 h-3">
									</div>
								</div>
								<div className="flex items-center self-stretch">
									<div className="flex flex-1 items-start mr-[72px]">
										<span className="text-[#667085] text-xs mr-[19px]" >
											4 Dimensi
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hmvenfgz_expires_30_days.png"} 
											className="w-1 h-1 mr-4 object-fill"
										/>
										<span className="text-[#667085] text-xs mr-[18px]" >
											15 Indikator
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7uh5ovsn_expires_30_days.png"} 
											className="w-1 h-1 mr-4 object-fill"
										/>
										<span className="text-[#667085] text-xs" >
											Draft: 3 | Reviewed: 3 | Evidence Linked: 8
										</span>
									</div>
									<span className="flex-1 text-[#667085] text-[11px]" >
										* Progress merupakan status kelengkapan administratif naskah DED, bukan prediksi skor kelulusan akreditasi.
									</span>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-col items-start w-[340px] gap-3">
									<span className="text-[#172033] text-sm font-bold" >
										Daftar Dimensi Evaluasi
									</span>
									<div className="flex flex-col items-start self-stretch bg-white py-4 pr-4 rounded-[10px] border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch mb-2.5 ml-4">
											<span className="text-[#172033] text-[13px] font-bold" >
												1. Visi Keilmuan
											</span>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-0.5 px-1.5 rounded">
												<span className="text-emerald-500 text-[10px] font-bold" >
													95% · Approved
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-xs w-[280px] mb-2.5 ml-4" >
											Kejelasan visi keilmuan yang futuristik dan adaptif terhadap kurikulum global.
										</span>
										<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[9px] ml-4">
										</div>
										<div className="flex justify-between items-center self-stretch ml-4">
											<span className="text-[#667085] text-[11px]" >
												3 Indikator
											</span>
											<span className="text-[#163A5F] text-[11px] font-bold" >
												Lihat Dimensi →
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-4 pr-4 rounded-[10px] border-2 border-solid border-[#163A5F]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<div className="flex justify-between items-center self-stretch mb-2.5 ml-4">
											<div className="flex shrink-0 items-center gap-2.5">
												<span className="text-[#163A5F] text-[13px] font-bold" >
													2. Misi Strategis
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jcynecxi_expires_30_days.png"} 
													className="w-1.5 h-1.5 object-fill"
												/>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-amber-100 py-0.5 px-1.5 rounded">
												<span className="text-[#F59E0B] text-[10px] font-bold" >
													90% · Needs Review
												</span>
											</div>
										</div>
										<span className="text-[#172033] text-xs w-[284px] mb-2.5 ml-4" >
											Keterlibatan pemangku kepentingan dan relevansi rumusan misi yang aplikatif.
										</span>
										<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[9px] ml-4">
										</div>
										<div className="flex justify-between items-center self-stretch ml-4">
											<span className="text-[#163A5F] text-[11px] font-bold" >
												4 Indikator Aktif
											</span>
											<span className="text-[#163A5F] text-[11px] font-bold" >
												Sedang Diedit *
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-4 pr-4 rounded-[10px] border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch mb-2.5 ml-4">
											<span className="text-[#172033] text-[13px] font-bold" >
												3. Tujuan &amp; Sasaran
											</span>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-0.5 px-1.5 rounded">
												<span className="text-emerald-500 text-[10px] font-bold" >
													85% · Approved
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-xs w-[242px] mb-2.5 ml-4" >
											Sasaran strategis jangka pendek &amp; panjang pendukung pencapaian lulusan utama.
										</span>
										<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[9px] ml-4">
										</div>
										<div className="flex justify-between items-center self-stretch ml-4">
											<span className="text-[#667085] text-[11px]" >
												4 Indikator
											</span>
											<span className="text-[#163A5F] text-[11px] font-bold" >
												Lihat Dimensi →
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-4 pr-4 rounded-[10px] border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch mb-2.5 ml-4">
											<span className="text-[#172033] text-[13px] font-bold" >
												4. Strategi Pencapaian
											</span>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-0.5 px-1.5 rounded">
												<span className="text-emerald-500 text-[10px] font-bold" >
													80% · Approved
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-xs w-[290px] mb-2.5 ml-4" >
											Strategi implementasi VMTS, tahapan target waktu, dan analisis keberlanjutan.
										</span>
										<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[9px] ml-4">
										</div>
										<div className="flex justify-between items-center self-stretch ml-4">
											<span className="text-[#667085] text-[11px]" >
												4 Indikator
											</span>
											<span className="text-[#163A5F] text-[11px] font-bold" >
												Lihat Dimensi →
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col gap-6">
									<div className="flex flex-col items-start self-stretch bg-white py-[18px] pr-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<span className="text-[#172033] text-sm font-bold ml-[18px]" >
											Alur Pemrosesan AI (Semantic Retrieval &amp; Generation)
										</span>
										<div className="flex items-center self-stretch py-1 ml-[18px]">
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cfevo2ey_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-[9px] object-fill"
												/>
												<span className="text-[#172033] text-[11px] font-bold" >
													Sources Searched
												</span>
											</div>
											<div className="bg-emerald-500 w-10 h-0.5">
											</div>
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gj1whs10_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-[9px] object-fill"
												/>
												<span className="text-[#172033] text-[11px] font-bold" >
													RRF Combined
												</span>
											</div>
											<div className="bg-emerald-500 w-10 h-0.5">
											</div>
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7vtmucko_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-[9px] object-fill"
												/>
												<span className="text-[#172033] text-[11px] font-bold" >
													Context Prepped
												</span>
											</div>
											<div className="bg-emerald-500 w-10 h-0.5">
											</div>
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lxsircvy_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-[9px] object-fill"
												/>
												<span className="text-[#172033] text-[11px] font-bold" >
													Gemini Drafted
												</span>
											</div>
											<div className="bg-emerald-500 w-10 h-0.5 mr-[1px]">
											</div>
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jpxkvp9t_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-[9px] object-fill"
												/>
												<span className="text-[#172033] text-[11px] font-bold" >
													Evidence Linked
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-3.5 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<div className="flex justify-between items-center self-stretch">
											<span className="text-[#172033] text-[15px] font-bold" >
												Panduan Asesmen &amp; Ringkasan Indikator (4 Indikator)
											</span>
											<span className="text-[#163A5F] text-xs font-bold" >
												Standar LAMEMBA Kriteria 1.2
											</span>
										</div>
										<div className="flex flex-col self-stretch gap-2.5">
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-3 rounded-lg">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-0.5 px-1.5 rounded">
													<span className="text-white text-[11px] font-bold" >
														1.2.1
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Pencapaian Misi UPPS &amp; PS
													</span>
													<span className="text-[#667085] text-xs" >
														Penyusunan melibatkan penjabaran sasaran operasional tri-dharma PT yang terukur dan terarah.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-3 rounded-lg">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-0.5 px-1.5 rounded">
													<span className="text-white text-[11px] font-bold" >
														1.2.2
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Pelibatan Pemangku Kepentingan
													</span>
													<span className="text-[#667085] text-xs" >
														Bukti keterlibatan aktif dosen, alumni, asosiasi profesi, dan dunia usaha dalam workshop penyusunan.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-3 rounded-lg">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-0.5 px-1.5 rounded">
													<span className="text-white text-[11px] font-bold" >
														1.2.3
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Peninjauan Relevansi Misi
													</span>
													<span className="text-[#667085] text-xs" >
														Mekanisme berkala peninjauan relevansi misi terhadap tantangan era disrupsi dan revolusi industri 5.0.
													</span>
												</div>
											</div>
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-3 rounded-lg">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-0.5 px-1.5 rounded">
													<span className="text-white text-[11px] font-bold" >
														1.2.4
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Misi sebagai Landasan Kebijakan
													</span>
													<span className="text-[#667085] text-xs" >
														Penggunaan draf misi sebagai basis penganggaran, Renstra operasional, dan pengembangan kurikulum.
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<div className="flex justify-between items-start self-stretch pb-3.5">
											<div className="flex shrink-0 items-center gap-2.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hrd0jav6_expires_30_days.png"} 
													className="w-[18px] h-[18px] object-fill"
												/>
												<span className="text-[#172033] text-[15px] font-bold" >
													AI-Assisted Draft VMTS - Misi Strategis
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-blue-50 py-1 px-2.5 rounded-md">
												<span className="text-blue-500 text-[11px] font-bold" >
													Generated by Gemini Academic
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-amber-100 p-3 gap-2 rounded-lg">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/atuaflj6_expires_30_days.png"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="flex-1 text-[#172033] text-[11px]" >
												PENTING: Narasi di bawah ini merupakan draf otomatis berdasarkan penelusuran Hybrid RAG. Wajib ditinjau oleh Asesor sebelum finalisasi.
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch">
											<span className="text-[#172033] text-[13px] w-[698px]" >
												&quot;Misi Program Studi S1 Manajemen Universitas DEMO dirancang selaras dengan arah pembangunan nasional dan dinamika global. (1) Penyusunan draf misi ini melibatkan seluruh pemangku kepentingan internal dan eksternal, termasuk alumni dan asosiasi industri, guna menjamin kompetensi lulusan yang relevan. (2) Rumusan misi ditinjau berkala sekurang-kurangnya setiap 4 tahun sekali melalui workshop evaluasi kurikulum akademik. (3) Berdasarkan draf ini, seluruh kebijakan tri-dharma perguruan tinggi diwajibkan mengacu pada prinsip pembangunan berkelanjutan (SDGs).&quot;
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch gap-2.5">
											<span className="text-[#172033] text-xs font-bold" >
												Source Citation Terkait (Semantic Retrieval &amp; BM25)
											</span>
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-4 rounded-lg border border-solid border-[#E4E7EC]">
												<div className="flex flex-1 flex-col items-start gap-1">
													<div className="flex items-center gap-[9px]">
														<span className="text-[#163A5F] text-xs font-bold" >
															Renstra_UPPS_2025_Final.pdf
														</span>
														<span className="text-[#667085] text-[11px]" >
															Halaman 14
														</span>
													</div>
													<span className="text-[#172033] text-xs w-[527px]" >
														&quot;...menargetkan keterpaduan tri-dharma dengan integrasi kurikulum berbasis outcome-based education (OBE) mulai tahun ajaran 2025/2026...&quot;
													</span>
												</div>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-[11px] font-bold" >
														View Source
													</span>
												</button>
											</div>
											<div className="flex items-start self-stretch bg-[#F7F9FC] p-3 gap-4 rounded-lg border border-solid border-[#E4E7EC]">
												<div className="flex flex-1 flex-col items-start gap-1">
													<div className="flex items-center gap-2.5">
														<span className="text-[#163A5F] text-xs font-bold" >
															Berita_Acara_Workshop_Kurikulum_2025.pdf
														</span>
														<span className="text-[#667085] text-[11px]" >
															Halaman 3
														</span>
													</div>
													<span className="text-[#172033] text-xs w-[535px]" >
														&quot;...kehadiran 12 perwakilan dari asosiasi praktisi manajemen dalam merumuskan target capaian pembelajaran lulusan (CPL)...&quot;
													</span>
												</div>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-[11px] font-bold" >
														View Source
													</span>
												</button>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<span className="text-[#172033] text-[15px] font-bold ml-5" >
											Evidence Linked (3 Dokumen Utama)
										</span>
										<div className="flex items-center self-stretch ml-5 gap-3">
											<div className="flex flex-col items-start w-[229px] py-3 pl-3 pr-[52px] gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/snm98vyv_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<span className="text-[#172033] text-[13px] font-bold" >
													Renstra UPPS 2025
												</span>
												<span className="text-[#667085] text-[11px]" >
													Kategori: Perencanaan Strategis
												</span>
												<div className="flex flex-col items-start bg-emerald-50 py-0.5 px-1.5 rounded">
													<span className="text-emerald-500 text-[10px] font-bold" >
														Verified
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start w-[229px] py-3 pl-3 pr-[74px] gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/218gwlnm_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<span className="text-[#172033] text-[13px] font-bold" >
													SK Penetapan VMTS
												</span>
												<span className="text-[#667085] text-[11px]" >
													Kategori: SK Dekan / Rektor
												</span>
												<div className="flex flex-col items-start bg-emerald-50 py-0.5 px-1.5 rounded">
													<span className="text-emerald-500 text-[10px] font-bold" >
														Verified
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start w-[229px] py-3 pl-3 pr-10 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/mt7up08y_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<span className="text-[#172033] text-[13px] font-bold" >
													Berita Acara Workshop
												</span>
												<span className="text-[#667085] text-[11px]" >
													Kategori: Keterlibatan Stakeholder
												</span>
												<div className="flex flex-col items-start bg-amber-100 py-0.5 px-1.5 rounded">
													<span className="text-[#F59E0B] text-[10px] font-bold" >
														Draft Linked
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 2px #1018280D"
										}}>
										<div className="flex justify-between items-start self-stretch pb-3.5">
											<span className="text-[#172033] text-[15px] font-bold" >
												Supervisor &amp; Human Review Panel
											</span>
											<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 gap-1.5 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/sxpmejfn_expires_30_days.png"} 
													className="w-3 h-3 rounded-md object-fill"
												/>
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													Needs Review
												</span>
											</div>
										</div>
										<div className="flex items-start self-stretch gap-6">
											<div className="flex flex-1 flex-col items-start gap-2.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Komentar Terakhir Asesor Internal
												</span>
												<button className="flex items-start self-stretch bg-[#F7F9FC] text-left p-3 gap-[15px] rounded-lg border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-xs w-[114px]" >
														&quot;Perlu penambahan bukti konkret keterlibatan asosiasi kurikulum. Berita acara workshop pemangku kepentingan harap ditautkan secara benar pada bagian narasi.&quot;
													</span>
													<span className="text-[#667085] text-[10px]" >
														Ditinjau oleh Dr. Ir. Hendra DEMO pada 2 jam yang lalu
													</span>
												</button>
											</div>
											<div className="flex flex-col items-start w-[280px] gap-2.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Versi &amp; Riwayat DED
												</span>
												<div className="flex flex-col items-start self-stretch gap-3">
													<div className="flex items-center gap-2">
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tjq7d9pe_expires_30_days.png"} 
															className="w-2 h-2 object-fill"
														/>
														<span className="text-[#172033] text-xs font-bold" >
															Awaiting Review (Revised v2)
														</span>
													</div>
													<div className="flex items-center gap-2">
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uiikj5s2_expires_30_days.png"} 
															className="w-2 h-2 object-fill"
														/>
														<span className="text-[#667085] text-xs" >
															Revised v1.5 (Minor Edits)
														</span>
													</div>
													<div className="flex items-center gap-2">
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/u9hje887_expires_30_days.png"} 
															className="w-2 h-2 object-fill"
														/>
														<span className="text-[#667085] text-xs" >
															Initial Draft Generated v1.0
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
		</div>
	)
}