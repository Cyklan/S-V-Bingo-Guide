import { ConsentGate } from "./ConsentGate";
import "./Youtube.css";
export function Youtube({ id }) {
  return (
    <ConsentGate>
      <iframe
        className="Youtube"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </ConsentGate>
  );
}
