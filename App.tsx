import {
	Code,
	ExternalLink,
	Gamepad2,
	Github,
	Linkedin,
	Mail,
	Terminal,
	User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useEffect, useState } from "react";

const App: React.FC = () => {
	const [gameState, setGameState] = useState<"start" | "playing">("start");
	const [selectedSection, setSelectedSection] = useState<string>("home");

	const sections = [
		{ id: "home", label: "HOME", icon: <Gamepad2 size={20} /> },
		{ id: "about", label: "ABOUT", icon: <User size={20} /> },
		{ id: "projects", label: "PROJECTS", icon: <Code size={20} /> },
		{ id: "contact", label: "CONTACT", icon: <Mail size={20} /> },
	];

	return (
		<div className="outer-frame min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
			<div className="scanlines" />

			<AnimatePresence mode="wait">
				{gameState === "start" ? (
					<motion.div
						key="start-screen"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex flex-col items-center justify-center h-screen space-y-12 p-4 text-center"
					>
						<motion.div
							animate={{ scale: [1, 1.05, 1] }}
							transition={{ repeat: Infinity, duration: 2 }}
							className="space-y-4"
						>
							<h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_5px_5px_rgba(255,255,255,0.2)]">
								GABRIELE FONTANA
							</h1>
							<p className="text-sm md:text-lg text-gray-400 font-mono">
								16-BIT PORTFOLIO v1.0
							</p>
						</motion.div>

						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => setGameState("playing")}
							className="pixel-button text-xl px-12 py-6 bg-white text-black font-bold"
						>
							PRESS START
						</motion.button>

						<div className="flex space-x-6 text-gray-500">
							<Github size={24} />
							<Linkedin size={24} />
							<Terminal size={24} />
						</div>
					</motion.div>
				) : (
					<motion.div
						key="game-screen"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-4xl mx-auto w-full p-6 md:p-12 space-y-12"
					>
						{/* Header / Nav */}
						<nav className="flex flex-wrap justify-center gap-4 mb-12">
							{sections.map((s) => (
								<button
									key={s.id}
									onClick={() => setSelectedSection(s.id)}
									className={`pixel-button flex items-center gap-2 text-[10px] md:text-xs ${
										selectedSection === s.id
											? "bg-[#00ff41] text-black"
											: "bg-black text-white"
									}`}
								>
									{s.icon}
									{s.label}
								</button>
							))}
						</nav>

						{/* Content Area */}
						<div className="pixel-box min-h-[400px] relative overflow-hidden">
							<AnimatePresence mode="wait">
								{selectedSection === "home" && (
									<motion.div
										key="home"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 20 }}
										className="space-y-8"
									>
										<div className="flex flex-col md:flex-row gap-8 items-center">
											<div className="w-32 h-32 bg-gray-800 border-4 border-white flex items-center justify-center text-4xl">
												👾
											</div>
											<div className="space-y-4 text-center md:text-left">
												<h2 className="text-2xl text-[#00ff41]">
													WELCOME, PLAYER 1
												</h2>
												<p className="text-sm leading-relaxed text-gray-300">
													Gabriele Fontana is a developer exploring the digital
													frontier. Specializing in giving value to the system.
												</p>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="pixel-box bg-[#111] border-gray-600">
												<h3 className="text-xs mb-4 text-[#ff00ff]">STATS</h3>
												<ul className="text-[10px] space-y-2 text-gray-400">
													<li>LVL: 41</li>
													<li>CLASS: FULLSTACK</li>
													<li>SKILL: TS / GO </li>
													<li>STR: DDD / TDD </li>
												</ul>
											</div>
											<div className="pixel-box bg-[#111] border-gray-600">
												<h3 className="text-xs mb-4 text-[#00ffff]">
													EQUIPMENT
												</h3>
												<ul className="text-[10px] space-y-2 text-gray-400">
													<li>VS CODE + VIM</li>
													<li>GIT / GITHUB</li>
													<li>DOCKER / KUBE</li>
												</ul>
											</div>
										</div>
									</motion.div>
								)}

								{selectedSection === "about" && (
									<motion.div
										key="about"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 20 }}
										className="space-y-6"
									>
										<h2 className="text-2xl text-[#ffff00]">THE QUEST</h2>
										<p className="text-sm leading-loose text-gray-300">
											Passionate about technology since the early days of
											computing. Gabriele focuses on creating clean, efficient,
											and secure applications. Always looking for the next
											challenge and learning new spells in the ever-evolving
											world of software development.
										</p>
										<div className="pixel-box bg-blue-900/20 border-blue-500">
											<p className="text-[10px] text-blue-300">
												"The best way to predict the future is to invent it."
											</p>
										</div>
									</motion.div>
								)}

								{selectedSection === "projects" && (
									<motion.div
										key="projects"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 20 }}
										className="space-y-6"
									>
										<h2 className="text-2xl text-[#ff00ff]">MISSION LOG</h2>
										<div className="grid grid-cols-1 gap-6">
											{[
												{
													title: "GAFREAX REPO",
													desc: "Main GitHub repository with various experiments.",
													link: "https://github.com/gafreax",
												},
												{
													title: "CSS OPTIMIZER",
													desc: "A powerful TypeScript library for optimizing CSS.",
													link: "https://gafreax.github.io/csscrunch/",
												},
											].map((p, i) => (
												<div
													key={i}
													className="pixel-box bg-[#1a1a1a] border-gray-700 hover:border-[#00ff41] transition-colors group"
												>
													<div className="flex justify-between items-start">
														<h3 className="text-sm text-[#00ffff] group-hover:text-[#00ff41]">
															{p.title}
														</h3>
														<a
															href={p.link}
															target="_blank"
															rel="noopener noreferrer"
														>
															<ExternalLink
																size={16}
																className="text-gray-500 hover:text-white"
															/>
														</a>
													</div>
													<p className="text-[10px] mt-2 text-gray-400">
														{p.desc}
													</p>
												</div>
											))}
										</div>
									</motion.div>
								)}

								{selectedSection === "contact" && (
									<motion.div
										key="contact"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 20 }}
										className="space-y-8 text-center"
									>
										<h2 className="text-2xl text-[#00ffff]">SEND MESSAGE</h2>
										<div className="flex flex-col items-center gap-6">
											<a
												href="https://github.com/gafreax"
												target="_blank"
												rel="noopener noreferrer"
												className="pixel-button w-full max-w-xs flex items-center justify-center gap-4"
											>
												<Github size={20} />
												GITHUB
											</a>
											<a
												href="https://www.linkedin.com/in/gabrielefontana/"
												target="_blank"
												rel="noopener noreferrer"
												className="pixel-button w-full max-w-xs flex items-center justify-center gap-4 bg-[#0077b5] text-white"
											>
												<Linkedin size={20} />
												LINKEDIN
											</a>
											<button className="pixel-button w-full max-w-xs flex items-center justify-center gap-4 bg-[#ff00ff] text-white">
												<Mail size={20} />
												EMAIL ME
											</button>
										</div>
										<p className="text-[8px] text-gray-500 mt-8">
											© 2026 GABRIELE FONTANA. ALL RIGHTS RESERVED.
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Footer / Status Bar */}
						<div className="flex justify-between items-center text-[8px] text-gray-600 font-mono border-t border-gray-800 pt-4">
							<div>STATUS: ONLINE</div>
							<div>LOCATION: CUNEO, ITALY</div>
							<div>FPS: 60</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default App;
