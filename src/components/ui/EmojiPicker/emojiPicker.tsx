import 'emoji-mart/css/emoji-mart.css';
import { BaseEmoji, Picker } from 'emoji-mart';
import { FC } from 'react';

interface EmojiPickerProps {
  onSelect: (emoji: BaseEmoji) => void;
}

const EmojiPicker: FC<EmojiPickerProps> = ({ onSelect }) => (
  <Picker
    title="Pick your emoji…"
    emoji="point_up"
    native
    onSelect={onSelect}
    theme="dark"
    style={{ position: 'absolute', bottom: 110, right: 90, zIndex: 1 }}
  />
);

export default EmojiPicker;
