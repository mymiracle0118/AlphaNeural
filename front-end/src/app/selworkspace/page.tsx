import CustomSelect from '../../components/CustomSelect';

export default function SelWorkspace() {
  return (
    <div className="sel-workspace w-screen h-screen flex flex-wrap place-content-center">
      <div className="mainboard max-w-[480] text-white px-12 py-10">
        <div className="text-center text-[36px] font-bold">
          Welcome to AlphaNeural AI
        </div>
        <p className="text-center pt-10 text-[18px]">Let's get started by choosing your industry</p>
        <CustomSelect
          isSearchable={true}>
            <option value="qwe">qwe</option>
        </CustomSelect>
      </div>
    </div>
  )
}