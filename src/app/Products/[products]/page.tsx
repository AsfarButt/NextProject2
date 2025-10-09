

export default function Products({ params }: { params: { products: string } }) {
  return (
    <div className="w-screen h-auto bg-black/20 flex flex-col justify-center text-xl items-center">
      
      <div className="relative w-full h-full flex flex-row">
        <div className="relative w-[50%] h-250 bg-red-400/30 flex justify-center items-center">
        <h1 className="absolute">Image section</h1>
        {/* Image */}
          <img className="relative w-[90%] max-w-120 h-auto"
          src='/Outfit-M/outfit1.png' alt="Image 1" />
        </div>
        <div className="relative w-[50%] h-250 bg-blue-500/30">Description Section</div>
      </div>
      <div className="relative w-full h-70 bg-black/30">Footer</div>

    </div>
  );
}