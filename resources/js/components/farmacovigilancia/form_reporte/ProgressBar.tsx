// components/ProgressBar.tsx
interface ProgressBarProps {
  currentStep: number;
}

export const ProgressBar = ({ currentStep }: ProgressBarProps) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-2">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
            {step}
          </div>
          <span className={`text-xs mt-1 ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
            Paso {step}
          </span>
        </div>
      ))}
    </div>
    <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-300"
        style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
      ></div>
    </div>
  </div>
);