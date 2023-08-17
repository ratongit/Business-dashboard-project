import './Home.css'
const Home = () => {
    return (
        <div class="bg w-full bg-no-repeat bg-cover overflow-hidden ">
            <h1 className=" text-yellow-50 uppercase sm:text-3xl font-semibold
            sm:font-bold
            text-center text-xl p-5
            sm:pt-20  lg:text-5xl 
            tracking-wide leading-9 lg:leading-snug
            ">welcome to task Managment web-site.</h1>
            
<h3 className='text-center text-slate-300 font-semibold'>Do Your Work In Smart way and Make your life Easy .</h3>

<div className='flex justify-center flex-wrap my-5  gap-8'> 

<button className="btn btn-outline btn-success">Admin</button>
<button className="btn btn-outline btn-warning">All task</button>
</div>
        </div>

        
    );
};

export default Home;