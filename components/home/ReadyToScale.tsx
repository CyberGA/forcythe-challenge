import CustomButton from "../CustomButton";

export default function ReadyToScale() {
  return (
    <section>
      <div className="global-padding-inline py-10 bg-[linear-gradient(0deg,_rgb(7,_22,_38)_20%,_rgb(3,_5,_22)_69%)] text-center text-white">
        <div className="max-w-[45rem] mx-auto text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
          <h2 className="text-cBlueLight">Ready to Scale?</h2>
          <h2>
            Join successful brands that chose us as{" "}
            <span className="text-cBlueLight">their growth accelerator</span>
          </h2>
        </div>
        <CustomButton clx="mx-auto" />
      </div>
    </section>
  );
}
