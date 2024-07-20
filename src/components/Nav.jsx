import Input from './Input'
import { TbUser } from "react-icons/tb"

export default function Nav() {
	return (
		<nav>
			<ul className='flex items-center gap-x-4 w-full'>
				<li>
					<form>
						<Input
							type={'search'}
							placeholder={'Search...'}
							className='px-4 py-1 rounded outline-none bg-slate-100 focus:bg-transparent focus:border focus:border-slate-500/50 hidden lg:block'
						/>
					</form>
				</li>
				<li>
					<TbUser className='w-12 h-12 p-1 bg-slate-200 rounded-full cursor-pointer' />
				</li>
			</ul>
		</nav>
	)
}
