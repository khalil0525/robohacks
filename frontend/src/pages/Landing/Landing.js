import styles from "./Landing.module.css";
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
  Image,
} from "antd";

import TextBox from "../../components/TextBox/TextBox";

const { Header, Footer, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Landing = () => {
  return (
    <Layout className={styles.landing}>
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
        <Row className={styles.photoRow}>
          <Col span={8} />
          <Col span={8}>
            <Image
              className={styles.mainPhoto}
              alt="Father and son in front of laptop"
              preview={false}
              src="/images/mainPhoto.jpg"
            />
          </Col>
          <Col span={8} />
        </Row>

        <Row className={styles.largeTextRow} justify="center">
          <Col xs={2} md={6} />
          <Col className={styles.textContainer} xs={20} md={12}>
            <Title level={2}>
              Utilizing the power of Microsoft Azure, Glance let’s you make the
              best decisions when making content decisions for your family.
            </Title>
          </Col>
          <Col xs={2} md={6} />
        </Row>

        <Row className={styles.smallTextRow} justify="center">
          <Col xs={2} md={8} />
          <Col className={styles.textContainer} xs={20} md={8}>
            <Text className={styles.clickText} level={2}>
              Click below to try it!
            </Text>
          </Col>
          <Col xs={2} md={8} />
        </Row>

        <Row className={styles.buttonRow}>
          <Col xs={2} md={8} />
          <Col className={styles.textContainer} xs={20} md={8}>
            <Button href="/home" type="primary" shape="round" size={"large"}>
              Check Content
            </Button>
          </Col>
          <Col xs={2} md={8} />
        </Row>

        <Row className={styles.infoRow}>
          <Col xs={1} md={2} />
          <Col xs={10} md={10}>
            <Image
              className={styles.infoRowPhoto}
              width="200"
              height="600"
              alt="Mom and daugther playing on tablet"
              preview={false}
              src="/images/momDaughterTablet.jpg"
            />
          </Col>
          <Col className={styles.infoContainer} xs={12} md={10}>
            <div className={styles.titleContainer}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 130 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.7917 48.75C28.3551 48.75 26.9773 49.3207 25.9615 50.3365C24.9457 51.3523 24.375 52.7301 24.375 54.1667V108.333C24.375 109.77 24.9457 111.148 25.9615 112.163C26.9773 113.179 28.3551 113.75 29.7917 113.75H100.208C101.645 113.75 103.023 113.179 104.038 112.163C105.054 111.148 105.625 109.77 105.625 108.333V54.1667C105.625 52.7301 105.054 51.3523 104.038 50.3365C103.023 49.3207 101.645 48.75 100.208 48.75H29.7917ZM40.625 70.4167H89.375V65H40.625V70.4167ZM89.375 83.9583H40.625V78.5417H89.375V83.9583ZM40.625 97.5H89.375V92.0833H40.625V97.5Z"
                  fill="#3943B7"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M81.2503 48.75V43.3333C81.2503 39.0236 79.5383 34.8903 76.4908 31.8428C73.4433 28.7954 69.3101 27.0833 65.0003 27.0833C60.6906 27.0833 56.5573 28.7954 53.5098 31.8428C50.4624 34.8903 48.7503 39.0236 48.7503 43.3333V48.75H81.2503ZM65.0003 16.25C50.0422 16.25 37.917 28.3752 37.917 43.3333V59.5833H92.0837V43.3333C92.0837 28.3752 79.9585 16.25 65.0003 16.25Z"
                  fill="#3943B7"
                />
              </svg>
              <Title level={3}>Keep your children safe</Title>
            </div>

            <Text className={styles.infoContainerDesc}>
              When your children are watching things online, do you ever wonder
              if the content they are watching is truly approppriate? Look no
              further than Glance. The easiest way to protect your family
            </Text>
          </Col>
          <Col xs={1} md={2} />
        </Row>

        <Row className={styles.infoRow}>
          <Col xs={1} md={2} />
          <Col className={styles.infoContainer} xs={12} md={10}>
            <div classname={styles.titleContainer}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 130 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.6906 17.3062L46.0281 33.2313C42.7578 35.8719 42.1281 40.625 44.6063 44.0172C47.2266 47.6328 52.325 48.3438 55.8391 45.6016L76.0094 29.9203C77.4313 28.8234 79.4625 29.0672 80.5797 30.4891C81.6969 31.9109 81.4328 33.9422 80.0109 35.0594L75.7656 38.35L111.759 71.5H120.25C125.633 71.5 130 67.1328 130 61.75V35.75C130 30.3672 125.633 26 120.25 26H103.858L103.066 25.4922L88.3187 16.0469C85.2109 14.0562 81.575 13 77.8781 13C73.45 13 69.1437 14.5234 65.6906 17.3062ZM70.3219 42.575L59.8203 50.7406C53.4219 55.7375 44.1391 54.4375 39.3453 47.8563C34.8359 41.6609 35.9734 33.0078 41.925 28.1938L58.825 14.5234C56.4688 13.5281 53.9297 13.0203 51.35 13.0203C47.5312 13 43.8141 14.1375 40.625 16.25L26 26H9.75C4.36719 26 0 30.3672 0 35.75V61.75C0 67.1328 4.36719 71.5 9.75 71.5H31.7281L50.2938 88.4406C54.275 92.0766 60.4297 91.7922 64.0656 87.8109C65.1828 86.5719 65.9344 85.1297 66.3203 83.6266L69.7734 86.7953C73.7344 90.4312 79.9094 90.1672 83.5453 86.2062C84.4594 85.2109 85.1297 84.0531 85.5563 82.8547C89.4969 85.4953 94.8594 84.9469 98.1703 81.3312C101.806 77.3703 101.542 71.1953 97.5812 67.5594L70.3219 42.575Z"
                  fill="#3943B7"
                />
              </svg>

              <Title level={3}>Fast Simple Secure</Title>
            </div>

            <Text className={styles.infoContainerDesc}>
              Glance is as easy as copy and paste. Paste the link to the YouTube
              video you would like scanned...and let us handle the rest!
            </Text>
          </Col>
          <Col xs={10} md={10}>
            <Image
              className={styles.infoRowPhoto}
              width="200"
              height="600"
              alt="Dad and kids posing"
              preview={false}
              src="/images/dadAndKids.jpg"
            />
          </Col>

          <Col xs={1} md={2} />
        </Row>

        <Row className={styles.infoRow}>
          <Col xs={1} md={2} />
          <Col xs={10} md={10}>
            <Image
              className={styles.infoRowPhoto}
              width="200"
              height="400"
              alt="Parents holding child"
              preview={false}
              src="/images/parentsAndChild.jpg"
            />
          </Col>
          <Col className={styles.infoContainer} xs={12} md={10}>
            <div className={styles.titleContainer}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 112 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 87.5C51.9571 87.5035 47.9764 86.5051 44.4138 84.594C40.8511 82.6829 37.8176 79.9186 35.5845 76.5485L41.4155 72.674C43.0117 75.081 45.1789 77.0556 47.7237 78.4215C50.2685 79.7874 53.1118 80.5023 56 80.5023C58.8882 80.5023 61.7315 79.7874 64.2763 78.4215C66.8211 77.0556 68.9883 75.081 70.5845 72.674L76.4155 76.5485C74.1824 79.9186 71.1489 82.6829 67.5862 84.594C64.0236 86.5051 60.0429 87.5035 56 87.5ZM70 49C68.6155 49 67.2621 49.4105 66.111 50.1797C64.9599 50.9489 64.0627 52.0421 63.5328 53.3212C63.003 54.6003 62.8644 56.0078 63.1345 57.3656C63.4046 58.7235 64.0713 59.9708 65.0503 60.9497C66.0292 61.9287 67.2765 62.5954 68.6344 62.8655C69.9922 63.1356 71.3997 62.997 72.6788 62.4671C73.9579 61.9373 75.0511 61.0401 75.8203 59.889C76.5895 58.7378 77 57.3845 77 56C77.0094 55.0781 76.8347 54.1637 76.4862 53.3102C76.1378 52.4567 75.6225 51.6813 74.9706 51.0294C74.3187 50.3775 73.5433 49.8622 72.6898 49.5138C71.8363 49.1653 70.9219 48.9906 70 49ZM42 49C40.6155 49 39.2622 49.4105 38.111 50.1797C36.9599 50.9489 36.0627 52.0421 35.5328 53.3212C35.003 54.6003 34.8644 56.0078 35.1345 57.3656C35.4046 58.7235 36.0713 59.9708 37.0503 60.9497C38.0292 61.9287 39.2765 62.5954 40.6344 62.8655C41.9922 63.1356 43.3997 62.997 44.6788 62.4671C45.9579 61.9373 47.0511 61.0401 47.8203 59.889C48.5895 58.7378 49 57.3845 49 56C49.0094 55.0781 48.8347 54.1637 48.4862 53.3102C48.1378 52.4567 47.6225 51.6813 46.9706 51.0294C46.3187 50.3775 45.5433 49.8622 44.6898 49.5138C43.8363 49.1653 42.9219 48.9906 42 49Z"
                  fill="#3943B7"
                />
                <path
                  d="M105 56V49H98V35C97.9954 31.2884 96.5189 27.7301 93.8944 25.1056C91.2699 22.4811 87.7116 21.0046 84 21H77V7H70V21H42V7H35V21H28C24.2884 21.0046 20.7301 22.4811 18.1056 25.1056C15.4811 27.7301 14.0046 31.2884 14 35V49H7V56H14V73.5H7V80.5H14V91C14.0046 94.7116 15.4811 98.2699 18.1056 100.894C20.7301 103.519 24.2884 104.995 28 105H84C87.7116 104.995 91.2699 103.519 93.8944 100.894C96.5189 98.2699 97.9954 94.7116 98 91V80.5H105V73.5H98V56H105ZM91 91C90.9981 92.8559 90.2601 94.6354 88.9477 95.9477C87.6354 97.2601 85.8559 97.9981 84 98H28C26.1441 97.9981 24.3647 97.2601 23.0523 95.9477C21.7399 94.6354 21.0019 92.8559 21 91V35C21.0019 33.1441 21.7399 31.3647 23.0523 30.0523C24.3647 28.7399 26.1441 28.0019 28 28H84C85.8559 28.0019 87.6354 28.7399 88.9477 30.0523C90.2601 31.3647 90.9981 33.1441 91 35V91Z"
                  fill="#3943B7"
                />
              </svg>

              <Title level={3}>Power of Machine Learning</Title>
            </div>
            <Text className={styles.infoContainerDesc}>
              Harnessing the secure power of Microsoft Azure you can trust that
              Glance will give you accurate, and reliable results so you can
              make the best content decisions for your family.
            </Text>
          </Col>
          <Col xs={1} md={2} />
        </Row>

        <Row className={styles.smallTextRow}>
          <Col xs={2} md={8} />
          <Col className={styles.textContainer} xs={20} md={8}>
            <Text className={styles.clickText} level={2}>
              Click below to try it!
            </Text>
          </Col>
          <Col xs={2} md={8} />
        </Row>

        <Row className={styles.buttonRow}>
          <Col xs={2} md={8} />
          <Col className={styles.textContainer} xs={20} md={8}>
            <Button href="/home" type="primary" shape="round" size={"large"}>
              Check Content
            </Button>
          </Col>
          <Col xs={2} md={8} />
        </Row>
      </Content>
      <Footer className={styles.footer} />
    </Layout>
  );
};
export default Landing;
