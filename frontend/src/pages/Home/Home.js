import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import {
	Layout,
	Row,
	Button,
	Typography,
	Col,
	Spin,
	Alert,
	Input,
	Space,
	Card,
	Steps,
} from "antd";

import TextBox from "../../components/TextBox/TextBox";

import axios from "axios";

import { socket } from "../../context/socket";

const { Header, Footer, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Step } = Steps;
const Home = (props) => {
	const [url, setUrl] = useState("");
	const [summaryText, setSummaryText] = useState("");
	const [transcriptionText, setTranscriptionText] = useState("");
	const [processing, setProcessing] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);
	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const inputChangeHandler = (event) => {
		setUrl(event.target.value);
	};

	const submitButtonClickHandler = async () => {
		if (url.length >= 10) {
			setProcessing(true);
			setButtonClicked(true);
			setCurrent(0);
			await postYoutubeLink(url);
		}
	};

	const postYoutubeLink = async (link) => {
		try {
			const { data } = await axios.post("/test/transcribe", {
				url: link.trim(),
			});
			console.log(data);
			setSummaryText(data.summary);
			setTranscriptionText(data.sentences);
			setButtonClicked(false);
			setTimeout(() => setProcessing(false), 2000);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		socket.on("loading", next);
		socket.on("connect", next);
		return () => {
			socket.off("loading", next);
			socket.off("connect", next);
		};
	});

	return (
		<Layout className={styles.home}>
			<Header className={styles.header}>
				<Row className={styles.headerRow}>
					<Col xs={6} md={1} className={styles.icon}>
						<svg
							width="38"
							height="28"
							viewBox="0 0 60 44"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M41.3889 0.5C43.3163 0.5 45.1606 1.21525 46.5251 2.48236C46.5781 2.54683 46.6258 2.61461 46.668 2.68514L58.2133 27.4715L58.6666 27.2604L58.2281 27.5007C59.0709 29.0386 59.5066 30.7438 59.4999 32.4716V32.4735C59.4999 35.3881 58.2725 38.1898 56.0771 40.2602C53.8807 42.3316 50.8958 43.5 47.7777 43.5C44.6597 43.5 41.6748 42.3316 39.4784 40.2602C37.283 38.1898 36.0555 35.3881 36.0555 32.4735V13.612V13.112H35.5555H24.4445H23.9445V13.612V32.4735C23.9445 35.3881 22.717 38.1898 20.5216 40.2602C18.3252 42.3316 15.3403 43.5 12.2223 43.5C9.1042 43.5 6.11932 42.3316 3.92293 40.2602C1.72753 38.1898 0.50008 35.3881 0.500084 32.4735L0.500076 32.4716C0.493382 30.7438 0.929058 29.0386 1.77188 27.5007L1.77974 27.4863L1.78665 27.4715L13.332 2.68515C13.3742 2.61461 13.4219 2.54682 13.4749 2.48235C14.8394 1.21523 16.6837 0.5 18.6111 0.5C20.5489 0.5 22.4027 1.22293 23.7694 2.50281L23.7693 2.50287L23.7757 2.50863C23.831 2.55871 23.8733 2.61714 23.9017 2.67951C23.9299 2.74154 23.9441 2.80707 23.9445 2.8725V11.5162V12.0162H24.4445H35.5555H36.0555V11.5162L36.0555 2.87331C36.0555 2.87304 36.0555 2.87277 36.0555 2.8725C36.0559 2.80707 36.0701 2.74154 36.0983 2.67951C36.1267 2.61714 36.169 2.55871 36.2243 2.50863L36.2244 2.50868L36.2306 2.50281C37.5973 1.22293 39.4511 0.5 41.3889 0.5ZM1.7223 32.4708V32.4735C1.7223 35.1171 2.8361 37.646 4.80817 39.5058C6.77924 41.3647 9.44665 42.4043 12.2223 42.4043C14.081 42.4041 15.9077 41.9373 17.515 41.0499C19.1224 40.1625 20.4541 38.8853 21.3702 37.3467C22.2864 35.8079 22.753 34.0643 22.7195 32.2955C22.6859 30.5267 22.1536 28.8003 21.1799 27.2937C20.2064 25.7875 18.8276 24.5564 17.188 23.7239C15.5485 22.8915 13.7056 22.4865 11.8481 22.549C9.99057 22.6115 8.18234 23.1392 6.60908 24.0801C5.03565 25.0211 3.75252 26.3424 2.89471 27.9112L2.88724 27.9248L2.88064 27.9389L2.35286 29.0654L2.34398 29.0843L2.33672 29.104C1.93626 30.1859 1.72849 31.3237 1.7223 32.4708ZM5.46368 22.3859L4.80078 23.8056L6.16352 23.0322C7.99077 21.9952 10.0855 21.4464 12.2221 21.447L12.2223 20.947L12.2223 21.447C14.1083 21.447 15.9655 21.875 17.6367 22.6937C19.3077 23.5123 20.7424 24.6967 21.8213 26.1445L22.7222 27.3535V25.8458V3.3429V3.10446L22.537 2.95438C21.4076 2.03959 19.9644 1.55437 18.4852 1.58583C17.0061 1.6173 15.5868 2.16345 14.5016 3.12603L14.4241 3.19473L14.3803 3.28855L5.46368 22.3859ZM37.463 2.95438L37.2778 3.10446V3.3429V25.8458V27.3539L38.1787 26.1445C39.8797 23.8611 42.4407 22.2643 45.3501 21.6847C48.2598 21.105 51.2929 21.5878 53.8364 23.0322L55.1995 23.8063L54.5363 22.3859L45.6197 3.28855L45.5759 3.19473L45.4984 3.12603C44.4132 2.16345 42.9939 1.6173 41.5148 1.58583C40.0356 1.55437 38.5924 2.03959 37.463 2.95438ZM57.1194 27.9389L57.1128 27.9248L57.1053 27.9112C56.2475 26.3424 54.9644 25.0211 53.3909 24.0801C51.8177 23.1392 50.0094 22.6115 48.1519 22.549C46.2944 22.4865 44.4515 22.8915 42.812 23.7239C41.1724 24.5564 39.7936 25.7875 38.8201 27.2937C37.8464 28.8003 37.3141 30.5267 37.2805 32.2955C37.247 34.0643 37.7136 35.8079 38.6298 37.3467C39.5459 38.8853 40.8776 40.1625 42.485 41.0499C44.0923 41.9373 45.919 42.4041 47.7777 42.4043C50.5534 42.4043 53.2208 41.3647 55.1918 39.5058C57.1639 37.646 58.2777 35.1171 58.2777 32.4735L58.2777 32.4708C58.2715 31.3237 58.0637 30.1859 57.6633 29.104L57.656 29.0843L57.6471 29.0654L57.1194 27.9389Z"
								fill="white"
								stroke="white"
							/>
						</svg>
					</Col>
					<Col xs={12} md={6}>
						<Title className={styles.headerText}>Glance</Title>
					</Col>
					<Col xs={6} md={17}></Col>
				</Row>
			</Header>

			<Content className={styles.content}>
				<Row justify="center" className={styles.title}>
					<Col>
						<Title level={2}>Submit Youtube Link</Title>
					</Col>
				</Row>
				{/* 
        <Row justify="center" className={styles.subtitle}>
          <Col>
            <Text>Subtitle...</Text>
          </Col>
        </Row> */}

				<Row className={styles.inputContainer}>
					<Col xs={2} md={8}></Col>
					<Col xs={20} md={10}>
						<Search
							placeholder="Enter youtube link"
							allowClear
							enterButton="Submit"
							size="large"
							onChange={inputChangeHandler}
							onSearch={submitButtonClickHandler}
						/>
					</Col>
					<Col xs={2} md={6}></Col>
				</Row>
				<Row className={styles.loader}>
					<Col xs={2} md={4}></Col>
					<Col xs={20} md={16}>
						{(buttonClicked || processing) && (
							<Steps size="small" current={current}>
								<Step title="Downloading" />
								<Step title="Transcribing" />
								<Step title="Transcript is being filtered for harmful content" />
								<Step title="A summary is being generated" />
							</Steps>
						)}
					</Col>
					<Col xs={2} md={4}></Col>
				</Row>

				{summaryText && transcriptionText && (
					<>
						<Row className={styles.infoPane}>
							<Col xs={0} md={6}></Col>
							<Col xs={6} md={2}>
								<Text>Summary</Text>
							</Col>
							<Col xs={18} md={10}>
								<Card>{summaryText}</Card>
							</Col>
							<Col xs={0} md={6}></Col>
						</Row>

						<Row className={styles.infoPane}>
							<Col xs={0} md={6}></Col>
							<Col xs={6} md={2}>
								<Text>Transcription</Text>
							</Col>
							<Col xs={18} md={10}>
								<Card>
									{transcriptionText &&
										transcriptionText.map((sentences, index) => {
											if (sentences.toxicityScore) {
												return (
													<span key={index} style={{ color: "red" }}>
														{sentences.sentence}
													</span>
												);
											}
											return <span key={index}> {sentences.sentence} </span>;
										})}
								</Card>
							</Col>
							<Col xs={0} md={6}></Col>
						</Row>
					</>
				)}
			</Content>
		</Layout>
	);
};

export default Home;
