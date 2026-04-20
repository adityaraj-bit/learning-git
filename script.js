document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');
    const statusBadge = document.getElementById('status-badge');
    const featureItems = document.querySelectorAll('.feature-item');

    // Add staggered entrance for feature items
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Interaction handler
    actionBtn.addEventListener('click', () => {
        // Change status badge
        statusBadge.textContent = 'Testing In Progress...';
        statusBadge.style.background = 'rgba(251, 191, 36, 0.1)';
        statusBadge.style.color = '#fbbf24';
        statusBadge.style.borderColor = 'rgba(251, 191, 36, 0.2)';

        // Add a temporary animation to the card
        const card = document.getElementById('main-content');
        card.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            card.style.transform = 'scale(1)';
            statusBadge.textContent = 'GitHub Sync Successful';
            statusBadge.style.background = 'rgba(34, 197, 94, 0.1)';
            statusBadge.style.color = '#22c55e';
            statusBadge.style.borderColor = 'rgba(34, 197, 94, 0.2)';
            
            // Create a small confetti effect (simulated with log)
            console.log('✨ GitHub Sync Successful! Ready to push.');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                statusBadge.textContent = 'Ready for Deployment';
                statusBadge.style.background = 'rgba(56, 189, 248, 0.1)';
                statusBadge.style.color = '#38bdf8';
                statusBadge.style.borderColor = 'rgba(56, 189, 248, 0.2)';
            }, 3000);
        }, 1500);
    });

    // Log for verification
    console.log('🚀 GitHub Test Project initialized successfully.');
});
