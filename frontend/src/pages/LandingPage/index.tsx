// 组件
import { Typography, Result, Button } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// 样式组件
import {
	LandingPageStyled,
	IntroductionSectionStyled,
	InterimSectionStyled,
	FooterSectionStyled,
} from './style';

// 业务库
import { useVh } from '@/hooks';

export default function LandingPage() {
	const vh = useVh();

	return (
		<LandingPageStyled>
			<IntroductionSectionStyled vh={vh}>
				<Typography.Title level={1} className="title">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</Typography.Title>
				<Typography.Paragraph className="sentence" type="secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
					accusantium deserunt magni recusandae consequuntur obcaecati iure,
					totam, quae iusto, officia maiores culpa perspiciatis vitae aliquam
					eos soluta fugit assumenda nesciunt.
				</Typography.Paragraph>
				<Typography.Paragraph className="sentence" type="secondary">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
					odit eum harum illo, assumenda alias dolore, animi sed fugiat qui
					maxime placeat repudiandae pariatur perspiciatis consequatur, atque
					voluptatem obcaecati ut!
				</Typography.Paragraph>

				<DownOutlined
					className="down-icon"
					onClick={() => {
						document
							.getElementById('c-layout')
							?.scrollTo(
								0,
								document.documentElement?.clientHeight || window.innerHeight,
							);
					}}
				/>
			</IntroductionSectionStyled>

			<InterimSectionStyled>
				<Result
					icon={<SmileOutlined />}
					title={
						<div className="sentence">
							<Typography.Text>
								I’ll call for pen and ink, and write my mind.
							</Typography.Text>
							<Typography.Text>
								Moist it again, and frame some feeling line.
							</Typography.Text>
							<Typography.Text>
								Write till your ink be dry, and with tears.
							</Typography.Text>
						</div>
					}
					extra={
						<Button type="primary" className="next-btn">
							Узнать болшее
						</Button>
					}
				/>
			</InterimSectionStyled>

			<FooterSectionStyled>
				<div className="gs-footerDataContainer">
					<div className="gs-footerInnerContainer">
						<div className="gs-about-us">
							<Typography.Title level={3} className="title">
								О нас
							</Typography.Title>
							<Typography.Paragraph>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</Typography.Paragraph>
						</div>
						<div className="gs-fotLinks">
							<Typography.Text>Links group</Typography.Text>
							<div className="gs-footBody">
								<ul className="gs-links-list">
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
									<li>
										<a>Link 3</a>
									</li>
									<li>
										<a>Link 4</a>
									</li>
									<li>
										<a>Link 5</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="gs-fotLinks">
							<Typography.Text>Links group</Typography.Text>
							<div className="gs-footBody">
								<ul className="gs-links-list">
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
									<li>
										<a>Link 3</a>
									</li>
									<li>
										<a>Link 4</a>
									</li>
									<li>
										<a>Link 5</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className="gs-footerHr" />
					<div className="gs-footerInnerContainer">
						<div className="gs-fotter-left">
							Copyright © 2022 <a>IT IS IT</a>.
						</div>
						<div className="gs-fotter-right">
							<a className="gs-social-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a className="gs-social-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a className="gs-social-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</FooterSectionStyled>
		</LandingPageStyled>
	);
}
