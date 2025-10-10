
import im from '@/assets/bitgates.png'



const BitgatesProject= () => {
  return (
    <section className="bg-black text-white py-12 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 border-b-2 border-gray-600 pb-2">
        Bitgates
      </h2>

      <div className="w-full max-w-5xl aspect-[16/9] border-4 border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 flex items-center justify-center bg-gray-900">
        <img
          src={im}
          alt="Bitgates Project"
          className="w-full h-full object-cover"
          loading="lazy"
          onClick={()=>{
            window.location.href = "https://github.com/Supp140106/BitGates";
          }}
        />
      </div>
    </section>
  );
};

export default BitgatesProject;
