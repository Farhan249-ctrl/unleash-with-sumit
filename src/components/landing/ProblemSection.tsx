const ProblemSection = () => {
  return (
    <section className="section-dark py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          The <span className="text-gradient-brand">Real Problem</span> No One Talks About
        </h2>
        <div className="space-y-6 text-secondary-foreground/80 text-lg leading-relaxed text-left md:text-center">
          <p>
            You studied for hours. You knew every answer. But the moment you walked into that interview room…
            <strong className="text-brand-yellow"> your mind went completely blank.</strong>
          </p>
          <p>
            Your palms got sweaty. Your voice cracked. The interviewer looked at you waiting.
            And you? You just sat there — knowing the answer but unable to say it.
          </p>
          <p>
            It's not a knowledge problem. <strong className="text-brand-yellow">It's an expression problem.</strong>
            And no one teaches you how to fix it.
          </p>
          <p className="text-brand-yellow font-display font-bold text-xl md:text-2xl pt-4">
            Until now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
