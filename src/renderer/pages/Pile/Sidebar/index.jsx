import { useParams } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useState } from 'react';
import { DateTime } from 'luxon';
import Timeline from './Timeline';

export default function Sidebar({}) {
  // current time
  const [time, setTime] = useState(DateTime.now());

  let now = new Date();
  let weeksTimestamps = [];

  return (
    <div className={styles.sidebar}>
      <Timeline />
    </div>
  );
}
