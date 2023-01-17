import { Header, Template } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	return (
		<div>
			<Header title="Andrio Pratama Sirait Site" />
			<Template menu="/">
				<div className="flex items-center justify-center flex-col h-full my-10">
					<p className="mb-2 mt-5">Hello, I’m</p>
					<h2 className="font-bold text-2xl mb-2 text-sky-500">
						Andrio Pratama Sirait
					</h2>
					<p className="text-xl mb-5">Full-stack Developer</p>
					<p className="mt-10 mb-20 mx-0 md:mx-4 lg:mx-10 text-center">
						A professional full-stack developer from Pekanbaru, Indonesia. 3
						years experienced working on StartUp. Working for more than 10+
						project. Im having big passion on business to give good impact for
						others, coding & technology to solve problem and streamline things
						with code. I always give my best for each projects I did. I give a
						solution with my creative app.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="/assets/CV Andrio - Apr 2022.pdf"
						className="mt-10 mb-20 bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-full text-sm">
						<FontAwesomeIcon icon={faDownload} className="mr-3" />
						Download CV
					</a>
				</div>
			</Template>
		</div>
	);
};

export default Home;
