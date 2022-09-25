/** @format */

import logo from './logo.svg';
import './App.css';
import image from './images/reward.jpg';
import img2b from './images/img2b.jpg';
import coins from './images/coins.jpg';
import person from './images/person.jpg';
import person1 from './images/person1.jpg';
import { TypeAnimation } from 'react-type-animation';

function App() {
	return (
		<div className='head'>
			<div className='quiz'>
				<h2>Quiz Time</h2>
			</div>

			<div className='head-detail'>
				<TypeAnimation
					sequence={[
						'Hello Folks',
						1000,
						'Lets play the game',
						1000,

						() => {
							console.log('Done typing!');
						},
					]}
					wrapper='div'
					cursor={true}
					repeat={2}
					style={{ fontSize: '20px' }}
				/>
				Learn About The World Of Health With Some
				<TypeAnimation
					sequence={[
						'Fun Quizzes',
						10000,

						() => {
							console.log('Done typing!');
						},
					]}
					wrapper='div'
					cursor={true}
					repeat={1}
					style={{ fontSize: '20px' }}
				/>
			</div>
			
				<img
					className='hk'
					src={image}
				/>
			
			

			<button type='button'>Start Playing</button>
		
			<div className='rules'>
				<div className='How'>
					<h1>How to play</h1>
				</div>
				<div className='method'>
					<img
						src={img2b}
						className='hk1'
					/>
					<p>
						This Quiz Has <strong>10 Questions</strong> Each With{' '}
						<strong>A 30-Second Timer</strong>
					</p>
				</div>
				<div className='method2'>
					<p>
						{' '}
						<strong>Correct </strong>Answers Will Earn You{' '}
						<strong>Coins</strong>
					</p>
					<img
						src={coins}
						className='hk1'
					/>
				</div>
				<div className='method3'>
					<img
						src={person}
						className='hk1'
					/>
					<p>
						<strong>Click </strong> On The Options
						<strong>To Confirm </strong>The Correct Answer
					</p>
				</div>
				<div className='method4'>
					<p>
						If You Quit The Quiz Midway , it Will Be
						<strong>Counted As Complete</strong>
					</p>
					<img
						className='hk1'
						src={person1}
					/>
				</div>
			</div>

			<div className='ins'>
				<h1>Why You Should Play THis? </h1>
				<h3>These Quizzes Are Designed To Help You Learn</h3>
				<h3>About Health In A More Entertaining Way.</h3>

				<h3>Make Your Learnings More Rewarding By Earning Coins .</h3>
			</div>

			<button
				className='end'
				type='button'>
				Start Playing
			</button>
		</div>
	);
}

export default App;
