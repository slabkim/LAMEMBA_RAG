import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/97rt6txm_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xjicm6ih_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/90cqcx07_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lonq6gnj_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/x9px9u5d_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7d03ucv2_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/do280j4o_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pmv3uttm_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/c8ymt2at_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/nkimap78_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="Evaluation Dataset"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm font-bold py-2.5 mr-1 border-0"
									/>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kszv7938_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ck0h7u0t_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/b1v0lw7y_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5c52mu4x_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/svdxqvoj_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cpk7ymva_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cqoe79vb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[907px] gap-1.5">
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
								<span className="text-[#667085] text-sm mr-[11px]" >
									Research
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Evaluation Dataset
								</span>
							</div>
							<div className="flex shrink-0 items-center gap-5">
								<div className="flex shrink-0 items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/dalpv090_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#667085] text-[13px]" >
										Cari dokumen atau kasus...
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ynv8jhdk_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/1h1v1gmu_expires_30_days.png"} 
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
						<div className="flex items-center self-stretch gap-6">
							<div className="flex flex-1 flex-col items-center pt-8">
								<div className="flex items-start self-stretch mb-6 mx-8">
									<div className="flex flex-col w-[376px] gap-1.5">
										<div className="flex items-center self-stretch gap-4">
											<span className="text-[#172033] text-[28px] font-bold" >
												Evaluation Dataset
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-[3px] pl-3 pr-[1px] rounded-md">
												<span className="text-white text-[11px] font-bold" >
													RESEARCH PROTOTYPE
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-sm" >
											Pengelolaan kumpulan test cases kualitatif &amp; kuantitatif untuk evaluasi akurasi LLM Only, Semantic RAG, dan Hybrid RAG berbasis borang standar akreditasi LAMEMBA.
										</span>
									</div>
									<div className="flex shrink-0 items-center mt-[84px] gap-3">
										<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jflqz135_expires_30_days.png"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-[#172033] text-[13px] font-bold" >
												Import Dataset
											</span>
										</button>
										<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2yh9jeok_expires_30_days.png"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-white text-[13px] font-bold" >
												Tambah Test Case
											</span>
										</button>
									</div>
								</div>
								<button className="flex items-start bg-amber-100 text-left p-3 mb-6 gap-2 rounded-lg border border-solid border-[#F59E0B]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pcyz3xgr_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-[13px] w-[664px]" >
										Catatan Penting: Halaman ini berisi data DEMO visualisasi antarmuka instrumen asesmen dan uji evaluasi, bukan merupakan representasi hasil penelitian ilmiah atau dokumen asli akreditasi universitas.
									</span>
								</button>
								<div className="flex items-start self-stretch mb-6 mx-8 gap-4">
									<div className="flex flex-col bg-white w-[166px] p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 3px #00000003"
										}}>
										<div className="flex items-center self-stretch gap-0.5">
											<span className="text-[#667085] text-[11px] font-bold" >
												Total Test Cases
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/z7d1bjiz_expires_30_days.png"} 
												className="w-[23px] h-[30px] rounded-lg object-fill"
											/>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-2xl font-bold" >
												120 Cases
											</span>
											<div className="flex items-center self-stretch gap-1.5">
												<div className="flex flex-1 flex-col items-center bg-emerald-50 py-0.5 rounded">
													<span className="text-emerald-500 text-[10px] font-bold" >
														100% Mapped
													</span>
												</div>
												<span className="text-[#667085] text-[11px]" >
													Terpetakan ke 7 Kriteria
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col bg-white w-[166px] p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 3px #00000003"
										}}>
										<div className="flex items-center self-stretch gap-[5px]">
											<span className="text-[#667085] text-[11px] font-bold" >
												Ready for Evaluation
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/dnjwbmyk_expires_30_days.png"} 
												className="w-[1px] h-[30px] rounded-lg object-fill"
											/>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-2xl font-bold" >
												95 Cases
											</span>
											<div className="flex items-center self-stretch gap-1.5">
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-0.5 px-1.5 rounded">
													<span className="text-emerald-500 text-[10px] font-bold" >
														79.1%
													</span>
												</div>
												<span className="text-[#667085] text-[11px]" >
													Verifikasi Ground Truth aman
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col bg-white w-[166px] p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 3px #00000003"
										}}>
										<div className="flex items-center self-stretch gap-5">
											<span className="text-[#667085] text-[11px] font-bold" >
												Needs Review
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/77tdo5ax_expires_30_days.png"} 
												className="w-[30px] h-[30px] rounded-lg object-fill"
											/>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-2xl font-bold" >
												15 Cases
											</span>
											<div className="flex items-center self-stretch gap-1.5">
												<div className="flex flex-col shrink-0 items-start bg-amber-100 py-0.5 px-1.5 rounded">
													<span className="text-[#F59E0B] text-[10px] font-bold" >
														12.5%
													</span>
												</div>
												<span className="text-[#667085] text-[11px]" >
													Perlu revisi naskah bukti
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col bg-white w-[166px] p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]" 
										style={{
											boxShadow: "0px 1px 3px #00000003"
										}}>
										<div className="flex items-center self-stretch gap-0.5">
											<span className="text-[#667085] text-[11px] font-bold" >
												Coverage Criteria
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/zuawl1in_expires_30_days.png"} 
												className="w-4 h-[30px] rounded-lg object-fill"
											/>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-2xl font-bold w-[84px]" >
												7 / 7 Kriteria
											</span>
											<div className="flex items-center self-stretch gap-1.5">
												<div className="flex flex-col shrink-0 items-start bg-blue-50 py-0.5 px-1.5 rounded">
													<span className="text-blue-500 text-[10px] font-bold" >
														Complete
													</span>
												</div>
												<span className="text-[#667085] text-[11px]" >
													Semua kriteria LAMEMBA terwakili
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch bg-white p-4 mb-6 mx-8 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center gap-3">
										<div className="flex shrink-0 items-center bg-white py-2 px-3 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/e7k2z2ye_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
											<span className="text-[#667085] text-[13px]" >
												Cari pertanyaan atau ID...
											</span>
										</div>
										<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[25px] rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px]" >
												Version: v1.0.0
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/o316fq7j_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</button>
										<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[52px] rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px]" >
												Kriteria: Semua
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9b1vh1cc_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</button>
									</div>
									<div className="flex items-center gap-3">
										<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[27px] rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px]" >
												Dimensi: Semua
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6wi3ntxg_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</button>
										<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[26px] rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px]" >
												Status: Semua
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/mbw1zyii_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-2 px-4 rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px] font-bold" >
												Reset Filter
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col self-stretch mb-60 mx-8 gap-6">
									<div className="flex flex-col self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex items-center self-stretch p-5 gap-1.5">
											<div className="flex flex-1 flex-col items-start gap-1">
												<span className="text-[#172033] text-base font-bold" >
													Daftar Test Cases Administratif
												</span>
												<span className="text-[#667085] text-[13px]" >
													Kasus uji evaluasi DED &amp; DKPS aktif untuk penjaminan keabsahan LLM
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-blue-50 py-1 px-3 rounded-md">
												<span className="text-blue-500 text-[11px] font-bold" >
													Tindakan Massal (Bulk Action) Tersedia
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-[#F7F9FC] py-3 px-4">
											<span className="text-[#667085] text-[11px] font-bold mr-[54px]" >
												ID
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												PERTANYAAN EVALUATIF
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px] font-bold mr-11" >
												KRITERIA
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[34px]" >
												BUKTI ACUAN
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[25px]" >
												STATUS REVIEW
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												AKSI
											</span>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold mr-[21px]" >
												TC-011
											</span>
											<span className="text-[#172033] text-[13px] w-[213px] mr-5" >
												Bagaimana UPPS merumuskan visi keilmuan PS Manajemen sesuai dengan perkembangan ilmu?
											</span>
											<div className="flex flex-col shrink-0 items-center mr-2 gap-0.5">
												<span className="text-[#163A5F] text-xs font-bold" >
													Visi Keilmuan
												</span>
												<span className="text-[#667085] text-[11px]" >
													1. Orientasi Strategis
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-3.5" >
												DED Bab II Hal. 4
											</span>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[3px] px-2 mr-[51px] rounded-md">
												<span className="text-emerald-500 text-[11px] font-bold" >
													✓ Ready
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ycc0shvt_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8poe038g_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold mr-[18px]" >
												TC-012
											</span>
											<span className="text-[#172033] text-[13px] w-[217px] mr-4" >
												Apakah rasio dosen tetap terhadap mahasiswa pada DKPS memenuhi batas kualifikasi minimum?
											</span>
											<div className="flex flex-col shrink-0 items-center mr-2 gap-0.5">
												<span className="text-[#163A5F] text-xs font-bold w-[75px]" >
													Sumber Daya Manusia
												</span>
												<span className="text-[#667085] text-[11px]" >
													4. Pengelolaan Dosen
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[17px]" >
												DKPS Tabel 3.a.1
											</span>
											<div className="flex flex-col shrink-0 items-start bg-amber-100 py-[3px] px-2 mr-2 rounded-md">
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													⚠ Needs Review
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5l3p6x8y_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/saavtz2b_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold mr-[17px]" >
												TC-013
											</span>
											<span className="text-[#172033] text-[13px] w-[210px] mr-[23px]" >
												Sebutkan dokumen bukti fisik keterlibatan stakeholder eksternal dalam peninjauan kurikulum.
											</span>
											<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
												<span className="text-[#163A5F] text-xs font-bold" >
													Kurikulum &amp; Evaluasi
												</span>
												<span className="text-[#667085] text-[11px] mr-[17px]" >
													6. Pendidikan
												</span>
											</div>
											<span className="text-[#172033] text-xs w-16" >
												Belum disematkan
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<div className="flex flex-col shrink-0 items-center relative mr-2">
												<div className="bg-red-50 w-[105px] h-[21px] rounded-md">
												</div>
												<span className="text-red-500 text-[11px] font-bold absolute top-[3px] right-[-7px]" >
													✕ Missing Evidence
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h08bfty0_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/a9gv2fpb_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold mr-[17px]" >
												TC-014
											</span>
											<span className="text-[#172033] text-[13px] w-[216px] mr-[17px]" >
												Bagaimana mekanisme penjaminan mutu internal UPPS dilaksanakan secara siklikal?
											</span>
											<div className="flex flex-col shrink-0 items-start mr-2 gap-0.5">
												<span className="text-[#163A5F] text-xs font-bold w-[66px] mr-[19px]" >
													Sistem Penjaminan Mutu
												</span>
												<span className="text-[#667085] text-[11px]" >
													2. Tata Pamong
												</span>
											</div>
											<span className="text-[#172033] text-xs w-[86px] mr-[22px]" >
												DED Bab III Hal. 12
											</span>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[3px] px-2 mr-[51px] rounded-md">
												<span className="text-emerald-500 text-[11px] font-bold" >
													✓ Ready
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/bf50wqeb_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2ohyd0in_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
											</div>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold mr-[18px]" >
												TC-015
											</span>
											<span className="text-[#172033] text-[13px] w-[216px] mr-[17px]" >
												Sebutkan total dana penelitian per dosen tetap per tahun yang dicatat pada borang DKPS.
											</span>
											<div className="flex flex-col shrink-0 items-center mr-2 gap-0.5">
												<span className="text-[#163A5F] text-xs font-bold" >
													Pendanaan Riset
												</span>
												<span className="text-[#667085] text-[11px]" >
													7. Penelitian &amp; PkM
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-6" >
												DKPS Tabel 5.a
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#F7F9FC] py-[3px] px-2 mr-[61px] rounded-md">
												<span className="text-[#667085] text-[11px] font-bold" >
													• Draft
												</span>
											</div>
											<div className="flex shrink-0 items-center gap-2">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6rzcb0ym_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5bhwgq7f_expires_30_days.png"} 
													className="w-[26px] h-[26px] rounded-md object-fill"
												/>
											</div>
										</div>
										<div className="flex justify-between items-center self-stretch p-4">
											<span className="text-[#667085] text-[13px]" >
												Menampilkan 1-5 dari 120 kasus uji
											</span>
											<div className="flex shrink-0 items-center gap-2">
												<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#667085] text-xs font-bold" >
														Sebelumnya
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-[#163A5F] text-left py-1.5 px-3 rounded-md border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-white text-xs font-bold" >
														1
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-xs font-bold" >
														2
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-xs font-bold" >
														3
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-xs font-bold" >
														Selanjutnya
													</span>
												</button>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-base font-bold" >
												Dataset Coverage (Cakupan Kriteria)
											</span>
											<span className="text-[#667085] text-[13px]" >
												Distribusi jumlah test cases terhadap 7 standar kriteria LAMEMBA
											</span>
										</div>
										<div className="flex flex-col self-stretch gap-1.5">
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													1. Orientasi Strategis
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-3.5 rounded">
														<div className="bg-[#163A5F] w-[126px] h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														18/20
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													2. Tata Pamong dan Tata Kelola
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-[35px] rounded">
														<div className="bg-[#163A5F] w-[105px] h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														15/20
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													3. Pengelolaan Mahasiswa
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-7 rounded">
														<div className="bg-[#163A5F] w-28 h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														12/15
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													4. Pengelolaan Dosen &amp; Tenaga Kependidikan
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="flex flex-col shrink-0 items-center bg-[#E4E7EC] rounded">
														<div className="bg-[#163A5F] w-[131px] h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														14/15
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													5. Keuangan dan Sarana Prasarana
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-[47px] rounded">
														<div className="bg-[#163A5F] w-[93px] h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														10/15
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													6. Pendidikan dan Pengajaran
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-7 rounded">
														<div className="bg-[#163A5F] w-28 h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														16/20
													</span>
												</div>
											</div>
											<div className="flex justify-between items-center self-stretch py-1.5">
												<span className="text-[#172033] text-[13px]" >
													7. Penelitian dan Pengabdian Masyarakat
												</span>
												<div className="flex shrink-0 items-center gap-3">
													<div className="shrink-0 items-start bg-[#E4E7EC] pr-[47px] rounded">
														<div className="bg-[#163A5F] w-[93px] h-2">
														</div>
													</div>
													<span className="text-[#172033] text-xs font-bold" >
														10/15
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-white w-[380px] pt-6 px-6" 
								style={{
									boxShadow: "-4px 0px 16px #0000000F"
								}}>
								<div className="flex justify-between items-center self-stretch mb-5">
									<div className="flex shrink-0 items-center gap-2.5">
										<span className="text-[#172033] text-base font-bold" >
											Test Case Detail
										</span>
										<div className="flex flex-col shrink-0 items-start bg-blue-50 py-[1px] px-1.5 rounded">
											<span className="text-blue-500 text-[10px] font-bold" >
												TC-011
											</span>
										</div>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/yerxe4u9_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
								<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										PERTANYAAN EVALUATIF
									</span>
									<span className="text-[#172033] text-sm font-bold w-[318px]" >
										Bagaimana UPPS merumuskan visi keilmuan PS Manajemen sesuai dengan perkembangan ilmu terkini?
									</span>
								</div>
								<div className="flex flex-col self-stretch bg-[#F7F9FC] p-3 mb-5 gap-2 rounded-lg">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											KRITERIA:
										</span>
										<span className="text-[#163A5F] text-xs font-bold" >
											1. Orientasi Strategis
										</span>
									</div>
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											DIMENSI:
										</span>
										<span className="text-[#163A5F] text-xs font-bold" >
											Visi Keilmuan
										</span>
									</div>
								</div>
								<div className="flex flex-col self-stretch mb-5 gap-2">
									<div className="flex items-center self-stretch gap-0.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											EXPECTED GROUND TRUTH
										</span>
										<div className="flex flex-col shrink-0 items-start bg-amber-100 py-0.5 px-1.5 rounded">
											<span className="text-[#F59E0B] text-[9px] font-bold" >
												Contoh referensi—bukan hasil asesmen
											</span>
										</div>
									</div>
									<span className="text-[#172033] text-[13px]" >
										Visi keilmuan PS Manajemen harus mengacu pada dokumen rencana induk pengembangan jangka panjang UPPS yang secara periodik ditinjau dengan melibatkan pakar riset serta asosiasi keprofesian manajemen guna mengadaptasi transformasi AI di dunia bisnis.
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										REFERENCE EVIDENCE CITATIONS
									</span>
									<div className="flex flex-col items-start self-stretch bg-blue-50 py-2.5 gap-1.5 rounded-lg border border-solid border-[#D0E0FF]">
										<div className="flex items-center ml-2.5 gap-1">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/u9xtjcgm_expires_30_days.png"} 
												className="w-3.5 h-3.5 object-fill"
											/>
											<span className="text-blue-500 text-xs font-bold" >
												DED_Manajemen_2026_Final.pdf
											</span>
										</div>
										<span className="text-[#667085] text-[11px] ml-2.5" >
											Halaman 4 · Paragraf 2
										</span>
										<span className="text-[#172033] text-[11px] w-[289px] ml-2.5" >
											&quot;Penyusunan visi keilmuan melibatkan dewan penasihat kurikulum nasional dan dirumuskan dalam SK Dekan No. 120/SK/2025...&quot;
										</span>
										<div className="flex items-center ml-2.5 gap-1.5">
											<span className="text-blue-500 text-[11px] font-bold" >
												View Source Document
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hin9d12o_expires_30_days.png"} 
												className="w-3 h-3 object-fill"
											/>
										</div>
									</div>
									<span className="text-[#667085] text-[10px] w-[321px]" >
										* Catatan: Adanya Evidence tidak otomatis membuktikan keabsahan atau correctness di borang LAMEMBA yang sebenarnya.
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										EVALUATOR NOTES
									</span>
									<span className="text-[#172033] text-[13px] w-[307px]" >
										Perlu penambahan lampiran bukti kuantitatif keterlibatan mitra industri asing pada kriteria revisi mendatang.
									</span>
								</div>
								<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
								</div>
								<div className="flex flex-col self-stretch mb-5 gap-3">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											Human Review
										</span>
										<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-2 rounded-md">
											<span className="text-emerald-500 text-[11px] font-bold" >
												✓ Ready
											</span>
										</div>
									</div>
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px]" >
											Dibuat: 20 Jan 2026
										</span>
										<span className="text-[#667085] text-[11px]" >
											Updated: Hari ini, 09:12
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-[912px] gap-3">
									<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-[23px] gap-2 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/rjas8nlq_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Edit Test Case
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-[21px] gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/u5imnvx7_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Mark as Ready
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}