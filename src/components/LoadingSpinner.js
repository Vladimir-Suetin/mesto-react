import './LoadingSpinner.css';

function loadingSpinner() {
  return (
    <div className='Spinner'>
      <div className='Spinner-line one'></div>
      <div className='Spinner-line two'></div>
      <div className='Spinner-line three'></div>
    </div>
  );
}

export default loadingSpinner;
