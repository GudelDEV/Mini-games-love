import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function ChapterProgress({ currentChapter, totalChapters }) {
  const progress = (currentChapter / totalChapters) * 100;

  return (
    <div className="mx-auto w-full max-w-md px-2">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs tracking-wider text-ink/60">OUR LITTLE JOURNEY</span>

        {/* <span className="text-xs text-dusty">
          {currentChapter} / {totalChapters}
        </span> */}
        <span className="text-xs text-dusty">Chapter {currentChapter}</span>
        <span className="text-xs text-dusty">{totalChapters} Chapters</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-blush">
        {/* <div
          className="h-full rounded-full bg-dusty transition-all duration-700"
          style={{ width: `${progress}%` }}
        /> */}
        <motion.div
          className="h-full rounded-full bg-dusty"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mt-2 flex justify-end">
        <Heart
          size={13}
          className="fill-rose text-dusty"
        />
      </div>
    </div>
  );
}

export default ChapterProgress;
