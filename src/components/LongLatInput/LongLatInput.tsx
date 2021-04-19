import { ChangeEvent, useCallback } from "react";

interface LongLatInputProps {
  longitude?: string;
  latitude?: string;
  onLongitudeChange?: (value: string) => void;
  onLatitudeChange?: (value: string) => void;
}

function LongLatInput(props: LongLatInputProps) {
  const {
    longitude = "",
    latitude = "",
    onLongitudeChange,
    onLatitudeChange,
  } = props;

  const handleLongitudeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onLongitudeChange) {
        onLongitudeChange(event.target.value);
      }
    },
    [onLongitudeChange]
  );

  const handleLatitudeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onLatitudeChange) {
        onLatitudeChange(event.target.value);
      }
    },
    [onLatitudeChange]
  );

  return (
    <div>
      <div>
        <label>Longitude: </label>
        <input type="text" onChange={handleLongitudeChange} value={longitude} />
      </div>
      <div>
        <label>Latitude: </label>
        <input type="text" onChange={handleLatitudeChange} value={latitude} />
      </div>
    </div>
  );
}

export { LongLatInput };
