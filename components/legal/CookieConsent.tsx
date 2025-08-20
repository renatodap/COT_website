'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

const COOKIE_CONSENT_KEY = 'omaki-cookie-consent';
const COOKIE_VERSION = '1.0.0';

export function CookieConsent() {
  const t = useTranslations('cookies');
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: '',
    version: COOKIE_VERSION,
  });

  useEffect(() => {
    // Check if consent was already given
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      // Show banner after 1 second
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      const storedPrefs = JSON.parse(stored) as CookiePreferences;
      // Check if version changed - show banner again
      if (storedPrefs.version !== COOKIE_VERSION) {
        setTimeout(() => setIsVisible(true), 1000);
      }
      // For MVP, just set stored preferences without applying them
      setPreferences(storedPrefs);
    }
  }, []);

  const applyPreferences = useCallback((prefs: CookiePreferences) => {
    // For MVP, just log what would happen
    console.log('Cookie preferences applied:', prefs);
    
    // Enable/disable analytics
    if (prefs.analytics && typeof window !== 'undefined') {
      console.log('Analytics would be enabled');
    } else {
      console.log('Analytics would be disabled');
    }

    // Enable/disable marketing cookies
    if (prefs.marketing) {
      console.log('Marketing cookies would be enabled');
    }
  }, []);


  const savePreferences = (prefs: CookiePreferences) => {
    const toSave = {
      ...prefs,
      timestamp: new Date().toISOString(),
      version: COOKIE_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(toSave));
    applyPreferences(toSave);
    setIsVisible(false);
    
    // Track consent event
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        necessary: prefs.necessary,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
      });
    }
  };

  const acceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: COOKIE_VERSION,
    };
    savePreferences(prefs);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const rejectAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: COOKIE_VERSION,
    };
    savePreferences(prefs);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Dark overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[999] transition-opacity"
        onClick={() => setShowDetails(false)}
      />
      
      {/* Cookie banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-court-green to-green-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-white" />
                <h2 className="text-lg font-semibold text-white">
                  {t('title')}
                </h2>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={t('close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-4">
                {t('description')}
              </p>

              {/* Cookie categories */}
              <div className={cn(
                'space-y-3 overflow-hidden transition-all duration-300',
                showDetails ? 'max-h-96' : 'max-h-0'
              )}>
                {/* Necessary cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="necessary"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="necessary" className="font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-court-green" />
                      {t('necessary.title')}
                      <span className="text-xs bg-court-green/10 text-court-green px-2 py-0.5 rounded">
                        {t('required')}
                      </span>
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('necessary.description')}
                    </p>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="font-semibold text-gray-900 cursor-pointer">
                      {t('analytics.title')}
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('analytics.description')}
                    </p>
                  </div>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      marketing: e.target.checked,
                    })}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing" className="font-semibold text-gray-900 cursor-pointer">
                      {t('marketing.title')}
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('marketing.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                {!showDetails ? (
                  <>
                    <Button
                      onClick={() => setShowDetails(true)}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      {t('customize')}
                    </Button>
                    <Button
                      onClick={rejectAll}
                      variant="outline"
                    >
                      {t('rejectAll')}
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="bg-court-green hover:bg-court-green/90 flex-1"
                    >
                      {t('acceptAll')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => setShowDetails(false)}
                      variant="outline"
                    >
                      {t('back')}
                    </Button>
                    <Button
                      onClick={acceptSelected}
                      className="bg-court-green hover:bg-court-green/90 flex-1"
                    >
                      {t('savePreferences')}
                    </Button>
                  </>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-court-green transition-colors">
                  {t('privacyPolicy')}
                </Link>
                <Link href="/terms" className="hover:text-court-green transition-colors">
                  {t('termsOfService')}
                </Link>
                <Link href="/cookies" className="hover:text-court-green transition-colors">
                  {t('cookiePolicy')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Cookie management utilities
export function getCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return null;
  }
}

export function updateCookieConsent(preferences: Partial<CookiePreferences>) {
  const current = getCookieConsent() || {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: '',
    version: COOKIE_VERSION,
  };
  
  const updated = {
    ...current,
    ...preferences,
    timestamp: new Date().toISOString(),
    version: COOKIE_VERSION,
  };
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updated));
}

export function revokeCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  // Reload page to reset everything
  window.location.reload();
}

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}