import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ServiceItemProps {
  number: string
  title: string
  description: string
  details: string[]
}

export function ServiceItem({ number, title, description, details }: ServiceItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-white/10 py-8">
      <motion.div
        initial={false}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <span className="text-sm text-blue-400">{number}</span>
            <h3 className="text-4xl font-light tracking-tight">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
        <p className="mt-4 text-gray-400 max-w-2xl">{description}</p>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-4">
              {details.map((detail, index) => (
                <p key={index} className="text-gray-300">{detail}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

