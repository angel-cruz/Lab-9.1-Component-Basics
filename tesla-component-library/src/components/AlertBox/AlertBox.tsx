import type { AlertBoxProps } from '../../types';
function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
  return <div className={`alert alert-${type}`} role="alert"><strong>{type.toUpperCase()}</strong><p>{message}</p>{children}{onClose && <button onClick={onClose}>Close</button>}</div>;
}
export default AlertBox;
