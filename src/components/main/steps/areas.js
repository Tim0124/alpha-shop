import { InitialAreas } from "./InitialAreas"

function Areas () {
  return(
    <select required>
      <option value="">請選擇縣市</option> 
      {InitialAreas.map(area =>
      <option value={area.value} key={area.id}>{area.area}</option>
        )}
    </select>
  )
}

export default Areas