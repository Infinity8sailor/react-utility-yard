import { useState } from 'react';
import { Input } from '../input/input';

export interface TextDisplayProps {
  /** Label / key */
  label: string;
  /** Display value */
  value: string;
  /** Enable inline editing */
  editable?: boolean;
  /** Called when value is saved */
  onSave?: (value: string) => void;
  /** Input type when editing */
  type?: 'text' | 'time' | 'datetime-local' | 'date';
  /** Additional class */
  className?: string;
}

export function TextDisplay({
  label,
  value,
  editable = false,
  onSave,
  type = 'text',
  className = '',
}: TextDisplayProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const handleSave = () => {
    onSave?.(draft);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') { setDraft(value); setIsEditing(false); }
  };

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '2rem' }}>
      <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--ruy-text-secondary)', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      {isEditing ? (
        <Input
          size="sm"
          type={type}
          value={draft}
          onchange={setDraft}
          onkeyDown={handleKeyDown}
          focus
          editOn
        />
      ) : (
        <span
          style={{ fontSize: '0.875rem', color: 'var(--ruy-text-primary)', cursor: editable ? 'pointer' : 'default' }}
          onDoubleClick={editable ? () => setIsEditing(true) : undefined}
        >
          {value || '—'}
        </span>
      )}
    </div>
  );
}
