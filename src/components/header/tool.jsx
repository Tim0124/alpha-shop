import { ReactComponent as Search } from 'public/icons/search.svg';
import { ReactComponent as Cart } from 'public/icons/cart.svg';
import { ReactComponent as Mode } from 'public/icons/mode.svg';

function Tool () {
  return (
    <>
      <a href="/"><Search /></a>
      <a href="/"><Cart /></a>
      <a href="/"><Mode /></a>
    </>
  )
}

export default Tool