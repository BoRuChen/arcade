import Head from 'next/head'
import {Board} from "../components/Gobang/board";

export default function Home() {
  return (
    <div className='flex justify-center items-center p-3'>
            <Board />
    </div>
  )
}
