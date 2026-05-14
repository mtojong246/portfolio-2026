import { motion, AnimatePresence } from 'motion/react';

export default function SectionHeader({
    title,
    subtitle,
}: {
    title: string,
    subtitle: string,
}) {
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-4">
                    <div className="w-[24px] h-[1px] border border-secondary" />
                    <p className="text-secondary font-medium">{subtitle}</p>
                </div>
                <h2 className="font-semibold text-[32px] text-white">{title}</h2>
            </motion.div>
        </AnimatePresence>
    )
}