const Goals = () => {
  const goals = [
    {
      category: '短期目標（1年以内）',
      items: [
        {
          title: 'Goの習得',
          description: '現在学習中のGoを実務レベルまで習得し、バックエンド開発の幅を広げる',
          icon: '🔥'
        },
        {
          title: 'インターンでの成果創出',
          description: '現在参画中のインターンで技術力を向上させ、チームに貢献できる成果を出す',
          icon: '💼'
        },
        {
          title: '大学復学と両立',
          description: '2025年4月の大学復学後も、学業とエンジニア活動を両立させる',
          icon: '📚'
        }
      ]
    },
    {
      category: '中期目標（3年以内）',
      items: [
        {
          title: '大学卒業とエンジニア就職',
          description: '社会学の学びとエンジニアスキルを活かし、社会課題解決に取り組む企業に就職する',
          icon: '🎓'
        },
        {
          title: 'フルスタックエンジニアとしての成長',
          description: 'フロントエンドからバックエンド、インフラまで幅広い技術領域で活躍できるエンジニアになる',
          icon: '⚡'
        },
        {
          title: '技術コミュニティへの貢献',
          description: '学んだ技術を発信し、同世代のエンジニアと知識を共有する活動を行う',
          icon: '🤝'
        }
      ]
    },
    {
      category: '長期目標（5年以上）',
      items: [
        {
          title: '社会課題解決プロダクトの開発',
          description: 'テクノロジーを活用して社会問題を解決するプロダクトやサービスを開発する',
          icon: '🌍'
        },
        {
          title: 'エンジニアリーダーとしての活動',
          description: 'チームを率いて大規模なプロジェクトを成功に導き、後進の育成にも貢献する',
          icon: '👨‍💼'
        },
        {
          title: '社会学×テクノロジーの融合',
          description: '大学で学んだ社会学の知見とエンジニアリングスキルを組み合わせ、独自の価値を創造する',
          icon: '🚀'
        }
      ]
    }
  ];

  return (
    <section id="goals" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            目標
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            エンジニアとしての成長目標と将来のビジョンをご紹介します
          </p>
        </div>

        <div className="space-y-12">
          {goals.map((goalCategory, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                {goalCategory.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {goalCategory.items.map((goal, goalIndex) => (
                  <div
                    key={goalIndex}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{goal.icon}</div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {goal.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* モチベーション */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            私のモチベーション
          </h3>
          <p className="text-lg text-blue-100 mb-4">
            エンジニアとして社会をより良くしたい。
            テクノロジーの力で人々の生活を豊かにし、社会の課題解決に貢献することが私の使命です。
          </p>
          <p className="text-blue-100">
            学生エンジニアとして、学業と実務経験を両立させながら、
            常に成長し続けるエンジニアでありたいと思います。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goals; 