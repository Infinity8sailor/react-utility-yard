import { Button } from '../Button';

export interface ActionBarProps {
  /** Whether in edit mode */
  isEdit: boolean;
  /** Label for the edit button */
  editLabel?: string;
  /** Called when edit button is clicked */
  onEdit?: () => void;
  /** Called when save button is clicked */
  onSave?: () => void;
  /** Called when cancel button is clicked */
  onCancel?: () => void;
  /** Show loading on save */
  loading?: boolean;
  /** Size of buttons */
  size?: 'xs' | 'sm' | 'md';
  /** Additional class */
  className?: string;
}

export function ActionBar({
  isEdit,
  editLabel = 'Edit',
  onEdit,
  onSave,
  onCancel,
  loading = false,
  size = 'sm',
  className = '',
}: ActionBarProps) {
  if (!isEdit) {
    return (
      <div className={className}>
        <Button variant="ghost" size={size} onClick={onEdit}>{editLabel}</Button>
      </div>
    );
  }

  return (
    <div className={className} style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="solid" color="accent" size={size} onClick={onSave} loading={loading}>
        Save
      </Button>
      <Button variant="ghost" size={size} onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}
