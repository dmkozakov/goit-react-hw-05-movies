import { RevolvingDot } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <RevolvingDot
      height="100"
      width="100"
      radius="6"
      color="orangered"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  );
}
